/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';
import useStore from '../features/store';

const Words = () => {
  const words = useStore((state) => state.words);
  return (
    <div
      css={{
        display: 'block',
        overflow: 'auto',
        height: '45em',
      }}
    >
      <ol>
        {words.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ol>
      <Help show={words.length === 0} />
    </div>
  );
};

const Help = (props) => {
  return props.show ? (
    <article
      css={{
        fontSize: '1.25em',
      }}
    >
      <h2>What is Wordle Helper?</h2>
      <p>
        Wordle Helper helps you solve Wordle puzzles. Based on the results of your previous guesses, it generates a list
        of possible solutions.
      </p>
      <p>Never be at a loss for words again!</p>
      <h2>How To Use?</h2>
      <p>
        As you solve the puzzle, enter the results of your guesses in the word bank in Wordle Helper using the keyboard.
        Click on each letter to set it to yellow, green, or back to grey. You may delete letters by pressing the
        backspace button in the keyboard. When the word you enter looks like the result of your previous guess in
        Wordle, press the &lquo;Enter&rquo; button.
      </p>
      <p>
        You will see a list of words that could solve the puzzle generated here. Use that list to choose your next guess
        on the Wordle puzzle. Eventually, you should get a short list and the solution to your puzzle.
      </p>
    </article>
  ) : null;
};
Help.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Words;
