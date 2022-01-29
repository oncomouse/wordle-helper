/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import Guesses from './components/Guesses';
import Keyboard from './components/Keyboard';
import theme from './features/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Wordle Helper</h1>
      <div
        css={css`
          width: 600px;
        `}
      >
        <Guesses />
        <Keyboard />
      </div>
    </ThemeProvider>
  );
};

export default App;
