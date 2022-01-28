import propTypes from 'prop-types';
import { always } from 'ramda';
import useStore from '../features/store';
import { propType as ColorType } from '../types/Color';

const Guesses = () => {
  const [guesses, history] = useStore((state) => [state.guesses, state.history]);
  return (
    <div>
      <Guess guess={guesses} current={true} />
      {history.map((guess, i) => (
        <Guess key={i} guess={guess} />
      ))}
    </div>
  );
};

const Guess = (props) => {
  return props.guess.map((letter, i) => {
    const color = letter.cata({
      Grey: always('grey'),
      Green: always('green'),
      Yellow: always('yellow'),
      White: always('white'),
    });
    return <GuessLetter key={i} letter={letter === null ? '' : letter.x} current={props.current} color={color} />;
  });
};
Guess.propTypes = {
  current: propTypes.bool,
  guess: propTypes.arrayOf(ColorType).isRequired,
};

const GuessLetter = (props) => {
  const updateLetterColor = useStore((state) => state.updateLetterColor);
  return <div onClick={props.current ? () => updateLetterColor(props.key) : null}>{props.letter}</div>;
};
GuessLetter.propTypes = {
  current: propTypes.bool,
  key: propTypes.number,
  letter: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
};

export default Guesses;
