import { render as rtlRender, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from '../../redux/counter'
import { reducer } from '../../redux/reducer'

function render(ui, { initialState, store = createStore(reducer, initialState), ...rtlOptions } = {}) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...rtlOptions }),
    store
  }
}

test('can render with redux with defaults', () => {
  render(<Counter />)
  user.click(screen.getByText('+'))
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('1')
})

test('can render with redux with custom initial state', () => {
  render(<Counter />, {
    initialState: { count: 3 }
  })
  user.click(screen.getByText('-'))
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('2')
})