import { ThemeProvider } from '@emotion/react';
import Guesses from './components/Guesses';
import Keyboard from './components/Keyboard';
import theme from './features/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Wordle Helper</h1>
      <Guesses />
      <Keyboard />
    </ThemeProvider>
  );
};

export default App;
