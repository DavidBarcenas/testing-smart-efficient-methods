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

  user.click(screen.getByText(/fill.*form/i))

  user.type(screen.getByLabelText(/food/i), testData.food)
  user.click(screen.getByText(/next/i))

  user.type(screen.getByLabelText(/drink/i), testData.drink)
  user.click(screen.getByText(/review/i))

  await user.click(screen.getByText(/confirm/i, { selector: 'button' }))
  // await screen.findByText(/home/i)
  // screen.debug()
})