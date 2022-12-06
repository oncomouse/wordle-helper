import create from 'zustand'
import {
  __,
  adjust,
  append,
  dropLast,
  evolve,
  identity,
  ifElse,
  length,
  lt,
  pipe,
  toLower
} from 'ramda'
import Color from '../../types/Color'
import search from '../search'
import getWordList from './getWordList'

const NUMBER_OF_LETTERS_PER_WORD = 5

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
        guesses: ifElse(
          pipe(length, lt(__, NUMBER_OF_LETTERS_PER_WORD)),
          append(Color.new(toLower(x))),
          identity
        )
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
    if (get().guesses.length !== NUMBER_OF_LETTERS_PER_WORD) {
      return
    }
    set((state) => {
      const updatedHistory = [...get().history, state.guesses]
      return {
        words: search(words, updatedHistory),
        history: updatedHistory,
        guesses: []
      }
    })
  }
}))

export default useStore
