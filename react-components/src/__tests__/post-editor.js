import { render, screen } from '@testing-library/react'
import PostEditor from '../components/post-editor'

test('renders a form with itle, content, tags, and a submit', () => {
  render(<PostEditor />)

  screen.getByLabelText(/title/i)
  screen.getByLabelText(/content/i)
  screen.getByLabelText(/tags/i)
  screen.getByText(/submit/i)
})