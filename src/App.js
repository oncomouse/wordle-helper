import Guesses from './components/Guesses';
import Keyboard from './components/Keyboard';
const App = () => {
  return (
    <div>
      <h1>Wordle Helper</h1>
      <Guesses />
      <Keyboard />
    </div>
  );
};

export default App;
