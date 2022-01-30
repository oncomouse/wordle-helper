import { screen, fireEvent } from '@testing-library/react'
import render from './test-render'
import LetterButton from './LetterButton'
import store from '../features/store'
import Color from '../types/Color'

afterEach(() => {
  store.getState().resetState()
})
test('renders learn react link', () => {
  render(<LetterButton letter="a" />)
  const buttonElement = screen.getByText(/a/i)
  expect(buttonElement).toBeInTheDocument()
})
test('It adds a letter to guess', () => {
  render(<LetterButton letter="a" />)
  const buttonElement = screen.getByText(/a/i)
  fireEvent.click(buttonElement)
  expect(store.getState().guesses).toStrictEqual([Color.Grey('a')])
})
