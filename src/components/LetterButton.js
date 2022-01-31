/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import PropTypes from 'prop-types'
import useStore from '../features/store'
import Button from './Button'

const LetterButton = (props) => {
  const addLetter = useStore((state) => state.addLetter)
  return (
    <Button
      onClick={() => addLetter(props.letter)}
    >
      {props.letter}
    </Button>
  )
}
LetterButton.propTypes = {
  letter: PropTypes.string.isRequired
}

export default LetterButton
