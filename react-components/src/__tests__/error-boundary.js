import { render } from "@testing-library/react"
import { ErrorBoundary } from '../components/error-boundary'
import { reportError as mockReportError } from '../http-request/api'

jest.mock('../http-request/api')

afterEach(() => jest.clearAllMocks())

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
})