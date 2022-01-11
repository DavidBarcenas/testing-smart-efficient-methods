import ReactDOM from 'react-dom';
import FavoriteNumber from '../components/favorite-number'

test('renders a number input with a label "Favorite number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)

  expect(div.querySelector('input')).toHaveAttribute('type', 'number')
  expect(div.querySelector('label').textContent).toBe('Favorite number')
})