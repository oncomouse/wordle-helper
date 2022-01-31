/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import useStore from '../features/store'
import Button from './Button'

const EnterButton = () => {
  const getWords = useStore((state) => state.getWords)
  return (
    <Button width={1.5} onClick={() => getWords()}
    >
      Enter
    </Button>
  )
}

export default EnterButton
