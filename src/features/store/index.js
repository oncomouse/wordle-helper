import create from 'zustand'
import { __, adjust, append, dropLast, evolve, identity, ifElse, length, lt, pipe, toLower } from 'ramda'
import Color from '../../types/Color'
import search from '../search'
import getWordList from './getWordList'

const useStore = create((set, get) => ({
  guesses: [],
  history: [],
  words: [],
  resetState: () => set({ guesses: [], history: [], words: [] }),
  newGuess: () =>
    set((state) => ({
      history: append(state.guesses, state.history),
      guesses: []
    })),
  addLetter: (x) =>
    set(
      evolve({
        guesses: ifElse(pipe(length, lt(__, 5)), append(Color.new(toLower(x))), identity)
      })
    ),
  deleteLetter: () =>
    set(
      evolve({
        guesses: dropLast(1)
      })
    ),
  updateLetterColor: (i) =>
    set(
      evolve({
        guesses: adjust(i, (x) => x.update())
      })
    ),
  getWords: async () => {
    const words = get().words.length === 0 ? await getWordList() : get().words
    if (get().guesses.length !== 5) {
      return
    }
    set((state) => {
      const green = Array(state.guesses.length).fill(null)
      const yellow = Array(state.guesses.length).fill(null)
      const grey = []
      state.guesses.forEach((letter, i) => {
        letter.cata({
          Grey: (x) => {
            if (grey.indexOf(x) < 0) grey.push(x)
          },
          Yellow: (x) => {
            // if (yellow.indexOf(x) < 0) yellow.push(x)
            yellow[i] = x
          },
          Green: (x) => {
            green[i] = x
          },
          White: () => {}
        })
      })
      return {
        words: search(words, green, yellow, grey),
        history: append(state.guesses, state.history),
        guesses: []
      }
    })
  }
}))

export default useStore
