/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Global } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import Guesses from './components/Guesses';
import Keyboard from './components/Keyboard';
import Words from './components/Words';
import ResetButton from './components/ResetButton';
import theme from './features/theme';
import mq from './features/mq';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={mq({
          body: {
            fontSize: [12, 16],
          },
        })}
      />
      <div
        css={mq({
          maxWidth: 960,
          margin: 'auto',
          display: 'grid',
          gridTemplateColumns: ['1fr', '1.25fr 0.75fr'],
        })}
      >
        <div
          css={mq({
            gridColumnStart: 1,
            gridColumnEnd: [1, 3],
          })}
        >
          <h1
            css={{
              textAlign: 'center',
            }}
          >
            Wordle Helper
          </h1>
        </div>
        <div>
          <Guesses />
          <Keyboard />
          <div
            css={mq({
              textAlign: 'center',
              marginTop: '2em',
            })}
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
