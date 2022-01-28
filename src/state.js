import create from 'zustand';
import { adjust, evolve } from 'ramda';
import Color from './types/Color';

const useStore = create((set) => ({
  guesses: [],
  history: [],
  resetState: () => set({ guesses: [], history: [] }),
  newGuess: () => set({ guesses: [] }),
  addLetter: () => set({}),
  deleteLetter: () => set({}),
  pressEnter: () => set({}),
  updateLetterColor: (i) =>
    set(
      evolve({
        guesses: adjust(i, (x) => x.update()),
      })
    ),
}));

export default useStore;
