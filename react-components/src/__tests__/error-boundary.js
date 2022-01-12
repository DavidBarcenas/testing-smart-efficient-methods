import { render, screen } from "@testing-library/react"
import user from '@testing-library/user-event'
import { ErrorBoundary } from '../components/error-boundary'
import { reportError as mockReportError } from '../http-request/api'

jest.mock('../http-request/api')

beforeAll(() => jest.spyOn(console, 'error').mockImplementation(() => { }))
afterEach(() => jest.clearAllMocks())
afterAll(() => console.error.mockRestore())

function MyCustomError({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error('An error has occurred')
  } else {
    return null
  }
}

test('calls reportError and renders that there was a problem', () => {
  mockReportError.mockResolvedValueOnce({ succeeded: true })

  const { rerender } = render(
    <ErrorBoundary>
      <MyCustomError />
    </ErrorBoundary>
  )

  rerender(
    <ErrorBoundary>
      <MyCustomError shouldThrow={true} />
    </ErrorBoundary>
  )

  const error = expect.any(Error)
  const info = { componentStack: expect.stringContaining('MyCustomError') }

  expect(mockReportError).toHaveBeenCalledWith(error, info)
  expect(mockReportError).toHaveBeenCalledTimes(1)

  expect(console.error).toHaveBeenCalledTimes(2)

  expect(screen.getByRole('alert').textContent).toMatchInlineSnapshot(
    `"There was a problem."`
  )

  console.error.mockClear()
  mockReportError.mockClear()

  rerender(
    <ErrorBoundary>
      <MyCustomError />
    </ErrorBoundary>
  )

  user.click(screen.getByText(/try again/i))

  expect(mockReportError).not.toHaveBeenCalled()
  expect(console.error).not.toHaveBeenCalled()
  expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  expect(screen.queryByText(/try again/i)).not.toBeInTheDocument()
})