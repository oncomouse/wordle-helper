/** @jsxRuntime classic */
/** @jsx jsx */
import { css, useTheme, jsx } from '@emotion/react';
import useStore from '../features/store';

const EnterButton = () => {
  const getWords = useStore((state) => state.getWords);
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
      onClick={() => getWords()}
    >
      Enter
    </button>
  );
};

export default EnterButton;
