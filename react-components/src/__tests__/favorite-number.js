import { render, screen } from '@testing-library/react'
import FavoriteNumber from '../components/favorite-number'

test('renders a number input with a label "Favorite number"', () => {
  render(<FavoriteNumber />)
  const input = screen.getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})