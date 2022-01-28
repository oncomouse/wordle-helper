import create from 'zustand';
import { __, adjust, append, dropLast, evolve, identity, ifElse, length, lt, pipe, toLower } from 'ramda';
import Color from '../../types/Color';

const useStore = create((set) => ({
  guesses: [],
  history: [],
  resetState: () => set({ guesses: [], history: [] }),
  newGuess: () =>
    set((state) => {
      state.history = append(state.guesses, state.history);
      state.guesses = [];
    }),
  addLetter: (x) =>
    set(
      evolve({
        guesses: ifElse(pipe(length, lt(__, 5)), append(Color.new(toLower(x))), identity),
      })
    ),
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
