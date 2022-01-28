import PropTypes from 'prop-types';
import useStore from '../features/store';

const LetterButton = (props) => {
  const addLetter = useStore((state) => state.addLetter);
  return <button onClick={() => addLetter(props.letter)}>{props.letter}</button>;
};
LetterButton.propTypes = {
  letter: PropTypes.string.isRequired,
};

export default LetterButton;
