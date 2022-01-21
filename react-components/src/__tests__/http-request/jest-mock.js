import { render, screen, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { loadGreeting as mockLoadGreeting } from '../../http-request/api'
import GreetingLoader from '../../http-request/greeting-loader'

jest.mock('../../http-request/api')

test('loads greetings on click', async () => {
  mockLoadGreeting.mockResolvedValueOnce({ data: { greeting: 'TEST_GREETING' } })
  render(<GreetingLoader />)

  const nameInput = screen.getByLabelText(/name/i)
  const loadButton = screen.getByText(/load/i)

  userEvent.type(nameInput, 'Davee')
  userEvent.click(loadButton)

  expect(mockLoadGreeting).toHaveBeenCalledWith('Davee')
  expect(mockLoadGreeting).toHaveBeenCalledTimes(1)
  await waitFor(() => expect(screen.getByLabelText(/greeting/i)).toHaveTextContent('TEST_GREETING'))
})
