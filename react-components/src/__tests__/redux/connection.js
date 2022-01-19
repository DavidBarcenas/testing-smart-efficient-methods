import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from '../../redux/counter'
import { store } from '../../redux/store'
import { reducer } from '../../redux/reducer'

test('can render with redux with defaults', () => {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  )
  user.click(screen.getByText('+'))
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('1')
})

test('can render with redux with custom initial state', () => {
  const store = createStore(reducer, { count: 3 })
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  )
  user.click(screen.getByText('-'))
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('2')
})