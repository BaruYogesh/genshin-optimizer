import { CardThemed, ConditionalWrapper } from '@genshin-optimizer/common/ui'
import type { Read } from '@genshin-optimizer/sr/formula'
import { useDatabaseContext } from '@genshin-optimizer/sr/ui'
import {
  Box,
  CardActionArea,
  CardContent,
  CardHeader,
  Divider,
} from '@mui/material'
import { useContext } from 'react'
import { PresetContext, useComboContext } from './context'
import { OptimizationTargetSelector } from './TeammateDisplay/Optimize/OptimizationTargetSelector'

export function ComboEditor() {
  const { database } = useDatabaseContext()
  const { combo, comboId } = useComboContext()
  return (
    <CardThemed
      sx={{
        overflow: 'visible',
        top: 137, // height of the team selector
        position: 'sticky',
        zIndex: 101,
      }}
    >
      <CardHeader title="Combo Editor" />
      <Divider />
      <CardContent
        sx={{
          display: 'flex',
          gap: 1,
          overflowX: 'auto',
        }}
      >
        {combo.frames.map((frame, i) => (
          <Combo
            key={i + JSON.stringify(frame ?? {})}
            read={frame}
            index={i}
            setTarget={(read) =>
              database.combos.set(comboId, (combo) => {
                const frames = structuredClone(combo.frames)
                frames[i] = read
                combo.frames = frames
              })
            }
          />
        ))}
        <Box sx={{ flexShrink: 0 }}>
          <OptimizationTargetSelector
            setOptTarget={(read) =>
              database.combos.set(comboId, (combo) => {
                combo.frames = [...combo.frames, read]
              })
            }
          />
        </Box>
      </CardContent>
    </CardThemed>
  )
}
function Combo({
  read,
  index,
  setTarget,
}: {
  read: Read
  index: number
  setTarget(read: Read): void
}) {
  const { presetIndex, setPresetIndex } = useContext(PresetContext)
  return (
    <CardThemed
      bgt="light"
      sx={(theme) => ({
        flexShrink: 0,
        outline:
          presetIndex === index
            ? `solid ${theme.palette.success.main}`
            : undefined,
      })}
    >
      <ConditionalWrapper
        condition={presetIndex !== index}
        wrapper={(children) => (
          <CardActionArea onClick={() => setPresetIndex(index)}>
            {children}
          </CardActionArea>
        )}
      >
        <CardHeader title={`Combo ${index + 1}`} />
      </ConditionalWrapper>
      <Divider />
      <CardContent>
        <OptimizationTargetSelector optTarget={read} setOptTarget={setTarget} />
      </CardContent>
    </CardThemed>
  )
}
