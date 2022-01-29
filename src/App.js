/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import Guesses from './components/Guesses';
import Keyboard from './components/Keyboard';
import Words from './components/Words';
import ResetButton from './components/ResetButton';
import theme from './features/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        css={css`
          max-width: 960px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
        `}
      >
        <div
          css={css`
            grid-column-start: 1;
            grid-column-end: 3;
          `}
        >
          <h1
            css={css`
              text-align: center;
            `}
          >
            Wordle Helper
          </h1>
        </div>
        <div>
          <Guesses />
          <Keyboard />
          <div
            css={css`
              text-align: center;
              margin-top: 2rem;
            `}
          >
            <ResetButton />
          </div>
        </div>
        <div>
          <Words />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
