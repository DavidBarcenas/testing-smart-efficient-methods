/* eslint-disable testing-library/no-node-access */
import { render, screen, waitFor } from "@testing-library/react"
import user from '@testing-library/user-event'
import Alert from '../components/alert'

jest.mock('react-transition-group', () => {
  return {
    CSSTransition: props => props.in ? props.children : null
  }
})

test('shows hidden message when toggle is clicked', () => {
  const message = 'this is an alert message'
  render(<Alert>{message}</Alert>)

  const toggleButton = screen.getByText(/toggle/i)

  expect(screen.queryByText(message)).not.toBeInTheDocument()
  user.click(toggleButton)
  expect(screen.getByText(message)).toBeInTheDocument()
  user.click(toggleButton)
  expect(screen.queryByText(message)).not.toBeInTheDocument()
})
