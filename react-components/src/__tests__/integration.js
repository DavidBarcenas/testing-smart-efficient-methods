import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { submitForm as mockSubmitForm } from '../http-request/api'
import IntegrationApp from '../integration/app'

jest.mock('../http-request/api')

test('can fill out a form across multiple pages', async () => {
  mockSubmitForm.mockResolvedValueOnce({ success: true })
  const testData = { food: 'test food', drink: 'test drink' }
  render(<IntegrationApp />, { wrapper: BrowserRouter })

  user.click(await screen.findByText(/fill.*form/i))

  user.type(await screen.findByLabelText(/food/i), testData.food)
  user.click(await screen.findByText(/next/i))

  user.type(await screen.findByLabelText(/drink/i), testData.drink)
  user.click(await screen.findByText(/review/i))

  expect(await screen.findByLabelText(/food/i)).toHaveTextContent(testData.food)
  expect(await screen.findByLabelText(/drink/i)).toHaveTextContent(testData.drink)

  user.click(await screen.findByText(/confirm/i, { selector: 'button' }))

  expect(mockSubmitForm).toHaveBeenCalledWith(testData)
  expect(mockSubmitForm).toHaveBeenCalledTimes(1)

  user.click(await screen.findByText(/home/i))
  expect(await screen.findByText(/welcome home/i)).toBeInTheDocument()
})