import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import PostEditor from '../components/post-editor'

test('renders a form with itle, content, tags, and a submit', () => {
  render(<PostEditor />)

  screen.getByLabelText(/title/i)
  screen.getByLabelText(/content/i)
  screen.getByLabelText(/tags/i)
  const submitButton = screen.getByText(/submit/i)

  user.click(submitButton)
  expect(submitButton).toBeDisabled()
})