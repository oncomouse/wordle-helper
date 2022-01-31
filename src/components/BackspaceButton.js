/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import useStore from '../features/store'
import Button from './Button'

const BackspaceButton = () => {
  const deleteLetter = useStore((state) => state.deleteLetter)
  return (
    <Button width={1.5} onClick={() => deleteLetter()}
    >
      ⇦
    </Button>
  )
}

export default BackspaceButton
