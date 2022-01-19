import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { Provider } from 'react-redux'
import Counter from '../../redux/counter'
import { store } from '../../redux/store'

test('can render with redux with defaults', () => {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  )
  user.click(screen.getByText('+'))
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('1')
})