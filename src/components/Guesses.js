/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import propTypes from 'prop-types';
import { always } from 'ramda';
import useStore from '../features/store';
import Color, { ColorType } from '../types/Color';

const Guesses = () => {
  const [guesses, history] = useStore((state) => [state.guesses, state.history]);
  return (
    <div>
      {history.reverse().map((guess, i) => (
        <Guess key={i} guess={guess} />
      ))}
      <Guess guess={guesses} current={true} />
    </div>
  );
};

const Guess = (props) => {
  const guess = Array(5).fill(Color.White);
  props.guess.forEach((x, i) => {
    guess[i] = x;
  });
  return (
    <div
      css={css`
        display: grid;
        grid-gap: 0.25rem;
        grid-template-columns: repeat(5, 1fr);
        margin: 0.5rem 8rem;
      `}
    >
      {guess.map((letter, i) => {
        const color = letter.cata({
          Grey: always('#86888a'),
          Green: always('#6aaa64'),
          Yellow: always('#c9b458'),
          White: always('#000'),
        });
        return <GuessLetter key={i} index={i} letter={letter.get()} current={props.current} color={color} />;
      })}
    </div>
  );
};
Guess.propTypes = {
  current: propTypes.bool,
  guess: propTypes.arrayOf(ColorType).isRequired,
};

const GuessLetter = (props) => {
  const updateLetterColor = useStore((state) => state.updateLetterColor);
  return (
    <div
      css={css`
        display: grid-item;
        border: 2px solid ${props.color};
        border-radius: 3px;
        color: ${props.color};
        font-size: 2.5rem;
        font-weight: bold;
        text-align: center;
        height: 3.25rem;
      `}
      onClick={props.current ? () => updateLetterColor(props.index) : null}
    >
      {props.letter}
    </div>
  );
};
GuessLetter.propTypes = {
  current: propTypes.bool,
  index: propTypes.number,
  letter: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
};

export default Guesses;
