import { screen, fireEvent } from '@testing-library/react'
import render from './test-render'
import BackspaceButton from './BackspaceButton'
import store from '../features/store'
import Color from '../types/Color'

afterEach(() => {
  store.getState().resetState()
})
test('renders learn react link', () => {
  render(<BackspaceButton />)
  const buttonElement = screen.getByText(/⇦/i)
  expect(buttonElement).toBeInTheDocument()
})
test('It should delete a letter when clicked', () => {
  render(<BackspaceButton />)
  store.getState().guesses = [Color.Grey('a')]
  const buttonElement = screen.getByRole('button')
  fireEvent.click(buttonElement)
  expect(store.getState().guesses).toStrictEqual([])
})
