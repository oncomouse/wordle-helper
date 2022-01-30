/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react'
import propTypes from 'prop-types'
import { always } from 'ramda'
import useStore from '../features/store'
import Color, { ColorType } from '../types/Color'
import mq from '../features/mq'

const Guesses = () => {
  const [guesses, history] = useStore((state) => [state.guesses, state.history])
  return (
    <div
      css={mq({
        display: 'block'
      })}
    >
      {history.reverse().map((guess, i) => (
        <Guess key={i} guess={guess} />
      ))}
      <Guess guess={guesses} current={true} />
    </div>
  )
}

const Guess = (props) => {
  const guess = Array(5).fill(Color.White)
  props.guess.forEach((x, i) => {
    guess[i] = x
  })
  return (
    <div
      css={mq({
        display: 'grid',
        gridGap: '0.25em',
        gridTemplateColumns: 'repeat(5, 1fr)',
        margin: ['0.5em', '0.5rem 8rem']
      })}
    >
      {guess.map((letter, i) => {
        const color = letter.cata({
          Grey: always('grey'),
          Green: always('green'),
          Yellow: always('yellow'),
          White: always('white')
        })
        return <GuessLetter key={i} index={i} letter={letter.get()} current={props.current} color={color} />
      })}
    </div>
  )
}
Guess.propTypes = {
  current: propTypes.bool,
  guess: propTypes.arrayOf(ColorType).isRequired
}

const GuessLetter = (props) => {
  const theme = useTheme()
  const updateLetterColor = useStore((state) => state.updateLetterColor)
  return (
    <div
      css={mq({
        display: 'grid-item',
        border: `2px solid ${theme.colors.dark[props.color]}`,
        borderRadius: 3,
        backgroundColor: theme.colors[props.color],
        color: theme.colors.white,
        fontSize: '2.5em',
        fontWeight: 'bold',
        textAlign: 'center',
        height: '1.5em',
        padding: '0 0.3em'
      })}
      onClick={props.current ? () => updateLetterColor(props.index) : null}
    >
      {props.letter}
    </div>
  )
}
GuessLetter.propTypes = {
  current: propTypes.bool,
  index: propTypes.number,
  letter: propTypes.string.isRequired,
  color: propTypes.string.isRequired
}

export default Guesses
