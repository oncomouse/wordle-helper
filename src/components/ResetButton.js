/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import useStore from '../features/store'
import Button from './Button'

const ResetButton = () => {
  const resetState = useStore((state) => state.resetState)
  return (
    <Button width={2.5} color="yellow" onClick={() => resetState()}
    >
      New Puzzle
    </Button>
  )
}

export default ResetButton
