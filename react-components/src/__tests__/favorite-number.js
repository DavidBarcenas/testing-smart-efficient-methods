import { fireEvent, render, screen } from '@testing-library/react'
import FavoriteNumber from '../components/favorite-number'

const setup = () => render(<FavoriteNumber />)

test('renders a number input with a label "Favorite number"', () => {
  setup()
  const input = screen.getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})

test('entering an invalid value shows an error message', () => {
  setup()
  const input = screen.getByLabelText(/favorite number/i)
  fireEvent.change(input, { target: { value: '10' } })
  expect(screen.getByRole('alert')).toHaveTextContent(/the number is invalid/i)
})