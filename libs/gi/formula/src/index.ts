import type {
  AnyNode,
  ReRead,
  TagMapEntries,
} from '@genshin-optimizer/pando/engine'
import { compileTagMapValues, constant } from '@genshin-optimizer/pando/engine'
import { Calculator } from './calculator'
import { keys, values } from './data'
export { Calculator } from './calculator'
export type { CalcMeta } from './calculator'
export * from './data/util'
export * from './formulaText'
export * from './meta'
export * from './util'

export function genshinCalculatorWithValues(extras: TagMapEntries<number>) {
  return genshinCalculatorWithEntries(
    extras.map(({ tag, value }) => ({ tag, value: constant(value) }))
  )
}
export function genshinCalculatorWithEntries(
  extras: TagMapEntries<AnyNode | ReRead>
) {
  const extraEntries = compileTagMapValues(keys, extras)
  return new Calculator(keys, values as any, extraEntries)
}
