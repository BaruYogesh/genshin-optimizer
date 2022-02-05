import Artifact from "../Data/Artifacts/Artifact";
import { transformativeReactionLevelMultipliers, transformativeReactions } from "../StatConstants";
import { ICachedArtifact, MainStatKey, SubstatKey } from "../Types/artifact";
import { ICachedCharacter } from "../Types/character_WR";
import { allElementsWithPhy, ArtifactSetKey, CharacterKey } from "../Types/consts";
import { ICachedWeapon } from "../Types/weapon";
import { crawlObject, deepClone, layeredAssignment, objectKeyMap, objPathValue } from "../Util/Util";
import { input, teamBuff } from "./index";
import { Data, NumNode, ReadNode, StrNode } from "./type";
import { NodeDisplay, UIData, valueString } from "./uiData";
import { constant, customRead, frac, infoMut, percent, prod, resetData, subscript, sum, unit } from "./utils";

const asConst = true

function dataObjForArtifact(art: ICachedArtifact, mainStatAssumptionLevel: number = 0): Data {
  const mainStatVal = Artifact.mainStatValue(art.mainStatKey, art.rarity, Math.max(Math.min(mainStatAssumptionLevel, art.rarity * 4), art.level))
  const stats: [ArtifactSetKey | MainStatKey | SubstatKey, number][] = []
  stats.push([art.mainStatKey, mainStatVal])
  art.substats.forEach(({ key, value }) => key && stats.push([key, value]))
  return {
    art: {
      ...Object.fromEntries(stats.map(([key, value]) =>
        key.endsWith("_") ? [key, percent(value / 100)] : [key, constant(value)])),
      [art.slotKey]: {
        id: constant(art.id), set: constant(art.setKey)
      },
    },
    artSet: {
      [art.setKey]: constant(1)
    }
  }
}
function dataObjForCharacter(char: ICachedCharacter): Data {
  const result: Data = {
    lvl: constant(char.level),
    constellation: constant(char.constellation),
    asc: constant(char.ascension),

    premod: {
      talent: {
        auto: constant(char.talent.auto),
        skill: constant(char.talent.skill),
        burst: constant(char.talent.burst),
      },
    },
    enemy: {
      res: {
        ...objectKeyMap(allElementsWithPhy, ele =>
          percent((char.enemyOverride[`${ele}_enemyRes_`] ?? 10) / 100)),
      },
      level: constant(char.enemyOverride.enemyLevel ?? char.level),
    },
    hit: {
      hitMode: constant(char.hitMode)
    },
    customBonus: {},
  }

  for (const [key, value] of Object.entries(char.bonusStats))
    result.customBonus![key] = key.endsWith('_') ? percent(value / 100) : constant(value)

  if (char.enemyOverride.enemyDefRed_)
    result.enemy!.defRed = percent(char.enemyOverride.enemyDefRed_)
  if (char.enemyOverride.enemyDefIgn_)
    result.enemy!.defIgn = percent(char.enemyOverride.enemyDefIgn_)
  if (char.elementKey) {
    result.charEle = constant(char.elementKey)
    result.display = {
      basic: { [`${char.elementKey}_dmg_`]: input.total[`${char.elementKey}_dmg_`] },
      reaction: reactions[char.elementKey]
    }
  }

  crawlObject(char.conditional, ["conditional"], (x: any) => typeof x === "string", (x: string, keys: string[]) =>
    layeredAssignment(result, keys, constant(x)))
  return result
}
function dataObjForWeapon(weapon: ICachedWeapon): Data {
  return {
    weapon: {
      lvl: constant(weapon.level),
      asc: constant(weapon.ascension),
      refinement: constant(weapon.refinement),
      refineIndex: constant(weapon.refinement - 1)
    },
  }
}
export function uiDataForTeam(teamData: Dict<CharacterKey, Data[]>): Dict<CharacterKey, { target: UIData, buffs: Dict<CharacterKey, UIData> }> {
  // May the goddess of wisdom bless any and all souls courageous
  // enough to attempt for the understanding of this abomination.

  const mergedData = Object.entries(teamData).map(([key, data]) => [key, { ...mergeData(data) }] as [CharacterKey, Data])
  const result = Object.fromEntries(mergedData.map(([key, data]) =>
    [key, { targetRef: {} as Data, buffs: [data], calcs: {} as Dict<CharacterKey, Data> }]))

  Object.values(result).forEach(({ targetRef, buffs, calcs }) =>
    mergedData.forEach(([sourceKey, source]) => {
      // This construction creates a `Data` representing buff
      // from `source` applying to `target`. It has 3 data:
      // - `target` contains the reference for the final
      //   data. It is not populated at this stage,
      // - `calc` contains the calculation of the buffs,
      // - `buff` contains read nodes that point to the
      //   calculation in `calc`.

      if (!source?.teamBuff) return
      const base = source.teamBuff
      // Create new copy of `calc` as we're mutating it later
      const buff: Data = {}, calc: Data = deepClone({ teamBuff: base })
      buffs.push(buff)
      calcs[sourceKey] = calc

      const customReadNodes = {}

      crawlObject(base, [], (x: any) => x.operation, (x: NumNode | StrNode, key: string[]) => {
        {
          const inputNode = objPathValue(teamBuff, key) as ReadNode<number | string> | undefined
          if (!inputNode) throw new Error(`Unknown team buff destination ${key}`)
          layeredAssignment(buff, key, resetData(inputNode, calc))
          layeredAssignment(buff, ["teamBuff", ...key], resetData(inputNode, calc)) // TODO: Delete this
        }

        crawlObject(x, [], (x: any) => x?.operation === "read", (x: ReadNode<number | string>) => {
          if (x.path[0] === "targetBuff") return
          let readPath: readonly string[], readNode: ReadNode<number | string> | undefined, data: Data
          if (x.path[0] === "target") { // Link the node to target data
            readPath = x.path.slice(1)
            readNode = objPathValue(input, readPath) ?? objPathValue(customReadNodes, readPath!)
            data = targetRef
          } else { // Link the node to source data
            readPath = x.path
            readNode = x
            data = result[sourceKey].targetRef
          }
          if (!readNode) {
            readNode = customRead(readPath)
            layeredAssignment(customReadNodes, readPath, readNode)
          }
          layeredAssignment(calc, x.path, resetData(readNode, data))
        })
      })
    })
  )
  mergedData.forEach(([targetKey, data]) => {
    delete data.teamBuff
    const { targetRef, buffs } = result[targetKey]
    Object.assign(targetRef, mergeData(buffs))
    targetRef["target"] = targetRef
  })
  const origin = new UIData(undefined as any, undefined)
  const uiDataResult = Object.fromEntries(Object.entries(result).map(([key, value]) =>
    [key, {
      target: new UIData(value.targetRef, origin),
      buff: Object.fromEntries(Object.entries(value.calcs).map(([key, value]) =>
        [key, new UIData(value, origin)]))
    }]))
  return uiDataResult
}
function mergeData(data: Data[]): Data {
  function internal(data: any[], input: any, path: string[]): any {
    if (data.length <= 1) return data[0]
    if (data[0].operation) {
      const accu = (input as ReadNode<number> | undefined)?.accu
      if (accu === undefined) {
        if (data.length !== 1) throw new Error(`Multiple entries when merging \`unique\` for key ${path}`)
        return data[0]
      }
      const result: NumNode = { operation: accu, operands: data, }
      return result
    } else {
      return Object.fromEntries([...new Set(data.flatMap(x => Object.keys(x) as string[]))]
        .map(key => [key, internal(data.map(x => x[key]).filter(x => x), input?.[key], [...path, key])]))
    }
  }

  return data.length ? internal(data, input, []) : {}
}

function computeUIData(data: Data[]): UIData {
  return new UIData(mergeData(data), undefined)
}

const transMulti1 = subscript(input.lvl, transformativeReactionLevelMultipliers)
const transMulti2 = prod(16, frac(input.total.eleMas, 2000))
const trans = {
  ...objectKeyMap(["overloaded", "electrocharged", "superconduct", "shattered"] as const, reaction => {
    const { multi, variants: [ele] } = transformativeReactions[reaction]
    return infoMut(prod(
      infoMut(prod(multi, transMulti1), { asConst }),
      sum(unit, transMulti2, input.total[`${reaction}_dmg_`]),
      input.enemy.resMulti[ele]),
      { key: `${reaction}_hit`, variant: reaction })
  }),
  swirl: objectKeyMap(transformativeReactions.swirl.variants, ele => infoMut(
    prod(
      infoMut(prod(transformativeReactions.swirl.multi, transMulti1), { asConst }),
      sum(unit, transMulti2, input.total.swirl_dmg_),
      input.enemy.resMulti[ele]),
    { key: `${ele}_swirl_hit`, variant: ele }))
}
export const reactions = {
  anemo: {
    electroSwirl: trans.swirl.electro,
    pyroSwirl: trans.swirl.pyro,
    cryoSwirl: trans.swirl.cryo,
    hydroSwirl: trans.swirl.hydro,
    shattered: trans.shattered,
  },
  geo: {
    // TODO: crystallize
    shattered: trans.shattered,
  },
  electro: {
    overloaded: trans.overloaded,
    electrocharged: trans.electrocharged,
    superconduct: trans.superconduct,
    shattered: trans.shattered,
  },
  hydro: {
    electrocharged: trans.electrocharged,
    shattered: trans.shattered,
  },
  pyro: {
    overloaded: trans.overloaded,
    shattered: trans.shattered,
  },
  cryo: {
    superconduct: trans.superconduct,
    shattered: trans.shattered,
  },
}

export type { NodeDisplay, UIData };
export {
  dataObjForArtifact, dataObjForCharacter, dataObjForWeapon,
  mergeData, computeUIData, valueString,
};
