import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const titleElement = screen.getByRole('heading', { level: 1 })
  expect(titleElement).toHaveTextContent('Wordle Helper')
})
