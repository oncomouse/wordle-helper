/** @jsxRuntime classic */
/** @jsx jsx */
import { css, useTheme, jsx } from '@emotion/react';
import useStore from '../features/store';

const EnterButton = () => {
  const newGuess = useStore((state) => state.newGuess);
  const theme = useTheme();
  return (
    <button
      css={css`
        line-height: 1;
        margin: ${theme.button.margin}rem;
        width: ${theme.button.width * 1.5}rem;
        font-size: ${theme.button.font.size}rem;
        height: ${theme.button.height}rem;
      `}
      onClick={() => newGuess()}
    >
      Enter
    </button>
  );
};

export default EnterButton;
