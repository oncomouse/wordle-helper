/** @jsxRuntime classic */
/** @jsx jsx */
import { useTheme, jsx } from '@emotion/react'
import useStore from '../features/store'
import mq from '../features/mq'

const ResetButton = () => {
  const resetState = useStore((state) => state.resetState)
  const theme = useTheme()
  return (
    <button
      css={mq({
        lineHeight: 1,
        margin: `${theme.button.margin}em`,
        width: [`${theme.button.widthSmall * 2.5}em`, `${theme.button.width * 2.5}em`],
        fontSize: `${theme.button.font.size}em`,
        height: `${theme.button.height}em`,
        backgroundColor: theme.colors.green,
        border: `2px solid ${theme.colors.dark.green}`,
        borderRadius: 3,
        color: theme.colors.white,
        fontWeight: 'bold'
      })}
      onClick={() => resetState()}
    >
      New Puzzle
    </button>
  )
}

export default ResetButton
