import create from 'zustand';
import { adjust, dropLast, evolve } from 'ramda';
// import Color from './types/Color';

const useStore = create((set) => ({
  guesses: [],
  history: [],
  resetState: () => set({ guesses: [], history: [] }),
  newGuess: () => set({ guesses: [] }),
  addLetter: () => set({}),
  deleteLetter: () =>
    set(
      evolve({
        guesses: dropLast(1),
      })
    ),
  updateLetterColor: (i) =>
    set(
      evolve({
        guesses: adjust(i, (x) => x.update()),
      })
    ),
}));

export default useStore;
