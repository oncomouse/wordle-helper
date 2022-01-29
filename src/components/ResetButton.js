/** @jsxRuntime classic */
/** @jsx jsx */
import { css, useTheme, jsx } from '@emotion/react';
import useStore from '../features/store';

const ResetButton = () => {
  const resetState = useStore((state) => state.resetState);
  const theme = useTheme();
  return <button onClick={() => resetState()}>New Puzzle</button>;
};

export default ResetButton;
