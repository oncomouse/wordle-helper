/** @jsxRuntime classic */
/** @jsx jsx */
import { useTheme, jsx } from '@emotion/react';
import PropTypes from 'prop-types';
import useStore from '../features/store';
import mq from '../features/mq';

const LetterButton = (props) => {
  const addLetter = useStore((state) => state.addLetter);
  const theme = useTheme();
  return (
    <button
      css={mq({
        margin: `${theme.button.margin}em`,
        width: [`${theme.button.widthSmall}em`, `${theme.button.width}em`],
        fontSize: `${theme.button.font.size}em`,
        height: `${theme.button.height}em`,
      })}
      onClick={() => addLetter(props.letter)}
    >
      {props.letter}
    </button>
  );
};
LetterButton.propTypes = {
  letter: PropTypes.string.isRequired,
};

export default LetterButton;
