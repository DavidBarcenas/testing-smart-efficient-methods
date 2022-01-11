import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
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
  user.type(input, '10')
  expect(screen.getByRole('alert')).toHaveTextContent(/the number is invalid/i)
})