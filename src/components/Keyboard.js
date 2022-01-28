/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import LetterButton from './LetterButton';

const Keyboard = () => {
  const theme = useTheme();
  return (
    <div>
      <div>
        <LetterButton letter="q" />
        <LetterButton letter="w" />
        <LetterButton letter="e" />
        <LetterButton letter="r" />
        <LetterButton letter="t" />
        <LetterButton letter="y" />
        <LetterButton letter="u" />
        <LetterButton letter="i" />
        <LetterButton letter="o" />
        <LetterButton letter="p" />
      </div>
      <div
        css={css`
          margin-left: ${theme.button.width / 2}rem;
        `}
      >
        <LetterButton letter="a" />
        <LetterButton letter="s" />
        <LetterButton letter="d" />
        <LetterButton letter="f" />
        <LetterButton letter="g" />
        <LetterButton letter="h" />
        <LetterButton letter="j" />
        <LetterButton letter="k" />
        <LetterButton letter="l" />
      </div>
      <div>
        <LetterButton letter="z" />
        <LetterButton letter="x" />
        <LetterButton letter="c" />
        <LetterButton letter="v" />
        <LetterButton letter="b" />
        <LetterButton letter="n" />
        <LetterButton letter="m" />
      </div>
    </div>
  );
};

export default Keyboard;
