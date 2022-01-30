/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import useStore from '../features/store';

const Words = () => {
  const words = useStore((state) => state.words);
  return (
    <div
      css={css`
        display: block;
        overflow: auto;
        height: 45em;
      `}
    >
      <ol>
        {words.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ol>
    </div>
  );
};

export default Words;
