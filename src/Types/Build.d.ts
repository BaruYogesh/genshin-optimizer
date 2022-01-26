import { ICachedArtifact, MainStatKey, StatKey, SubstatKey } from "./artifact_WR"
import { ArtifactSetKey, SetNum, SlotKey } from "./consts"
import { BonusStats, ICalculatedStats } from "./stats"

export type ArtifactsBySlot = Dict<SlotKey, ICachedArtifact[]>
export type ArtifactSetEffects = Dict<ArtifactSetKey, Dict<SetNum, BonusStats>>
export type SetFilter = { key: ArtifactSetKey | "", num: number }[]
export interface BuildSetting {
  setFilters: SetFilter,
  statFilters: Dict<StatKey, number>
  mainStatKeys: {
    sands: MainStatKey[],
    goblet: MainStatKey[],
    circlet: MainStatKey[]
  },
  optimizationTarget?: string[],
  mainStatAssumptionLevel: number,
  useExcludedArts: boolean,
  useEquippedArts: boolean,
  builds: string[][]
  buildDate: number,
  maxBuildsToShow: number,
  plotBase: MainStatKey | SubstatKey | "",
  compareBuild: boolean,
  levelLow: number,
  levelHigh: number,
}
export type ArtifactsBySlot = Dict<SlotKey, ICachedArtifact[]>

export interface BuildRequest {
  dependencies: StatKey[]
  initialStats: ICalculatedStats,
  maxBuildsToShow: number,
  minFilters: Dict<StatKey, Number>,
  optimizationTarget: string | string[],
  plotBase: StatKey | "",
  prunedArtifacts: ArtifactsBySlot,
  setFilters: SetFilter,
  artifactSetEffects: ArtifactSetEffects,
}
export interface Build {
  buildFilterVal: number,
  artifacts: {
    [key: string]: ICachedArtifact
  }
}
