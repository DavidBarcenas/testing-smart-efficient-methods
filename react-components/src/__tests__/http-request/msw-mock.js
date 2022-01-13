import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from "@testing-library/react"
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import GreetingLoader from '../../http-request/greeting-loader'

const server = setupServer(
  rest.post('/greeting', (req, res, ctx) => {
    return res(ctx.json({ data: { greeting: `Hello ${req.body.subject}` } }))
  })
)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

test('load greeting on click', async () => {
  render(<GreetingLoader />)

  const nameInput = screen.getByLabelText(/name/i)
  const loadButton = screen.getByText(/load/i)

  userEvent.type(nameInput, 'Davee')
  userEvent.click(loadButton)

  await waitFor(() => expect(screen.getByLabelText(/greeting/i)).toHaveTextContent('Hello Davee'))
})