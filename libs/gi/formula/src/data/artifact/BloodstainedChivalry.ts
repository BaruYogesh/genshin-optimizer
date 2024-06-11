import type { ArtifactSetKey } from '@genshin-optimizer/gi/consts'
import { cmpGE } from '@genshin-optimizer/pando/engine'
import {
  allBoolConditionals,
  allListConditionals,
  allNumConditionals,
  percent,
  selfBuff,
  teamBuff,
} from '../util'
import { artCount, registerArt } from './util'

const key: ArtifactSetKey = 'BloodstainedChivalry'
const count = artCount(key)
// TODO: Conditionals
const { someBoolConditional } = allBoolConditionals(key)
const { _someListConditional } = allListConditionals(key, [])
const { _someNumConditional } = allNumConditionals(key, 'unique', false)

export default registerArt(
  key,

  // TODO:
  // - Add self-buff formulas using `selfBuff.<buff target>.add(<buff value>)`
  // - Add teambuff formulas using `teamBuff.<buff target>.add(<buff value>)
  // - Add active buff formulas using `activeCharBuff.<buff target>.add(<buff value>)`
  // - Add enemy debuff using `enemyDebuff.<debuff target>.add(<debuff value>)`
  //
  // Check for 2-set effect using `cmpGE(count, 2, ...)`
  selfBuff.premod.atk_.add(cmpGE(count, 2, percent(1))),
  // Applies non-stacking teambuff
  teamBuff.premod.atk_.addOnce(
    // Check for 4-set effect using `cmpGE(count, 4, ...)` and gate it behind a conditional
    someBoolConditional.ifOn(cmpGE(count, 4, percent(1)))
  )
)
