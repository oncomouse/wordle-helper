import PropTypes from 'prop-types';
import useStore from '../state';

const LetterButton = (props) => {
  const addLetter = useStore.getStore().addLetter;
  return <button onClick={addLetter(props.letter)}>{props.letter}</button>;
};
LetterButton.propTypes = {
  letter: PropTypes.string.isRequired,
};

export default LetterButton;
