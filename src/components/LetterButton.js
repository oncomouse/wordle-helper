/** @jsxRuntime classic */
/** @jsx jsx */
import { css, useTheme, jsx } from '@emotion/react';
import PropTypes from 'prop-types';
import useStore from '../features/store';

const LetterButton = (props) => {
  const addLetter = useStore((state) => state.addLetter);
  const theme = useTheme();
  return (
    <button
      css={css`
        margin: ${theme.button.margin}rem;
        width: ${theme.button.width}rem;
        font-size: ${theme.button.font.size}rem;
      `}
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
