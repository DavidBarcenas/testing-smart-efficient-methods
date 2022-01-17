import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import Navigation from '../../router/navigation'

test('main renders about and home and I can navigate to those pages', () => {
  window.history.pushState({}, 'test page', '/')
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>,
  )
  expect(screen.getByRole('heading')).toHaveTextContent(/home/i)
  userEvent.click(screen.getByText(/about/i))
  expect(screen.getByRole('heading')).toHaveTextContent(/about/i)
})