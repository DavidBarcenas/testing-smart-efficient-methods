import { render, screen, } from '@testing-library/react'
import user from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { savePost as mockSavePost } from '../http-request/api'
import PostEditor from '../components/post-editor'

const fakeUser = { id: 'user-1' }
const fakePost = {
  title: 'Test title',
  content: 'Test content',
  tags: ['tag1', 'tag2']
}

jest.mock('../http-request/api')

afterAll(() => jest.clearAllMocks())

function renderPostEditor() {
  render(<PostEditor user={fakeUser} />, { wrapper: BrowserRouter })
  user.type(screen.getByLabelText(/title/i), fakePost.title)
  user.type(screen.getByLabelText(/content/i), fakePost.content)
  user.type(screen.getByLabelText(/tags/i), fakePost.tags.join(','))
  const submitButton = screen.getByText(/submit/i)
  return { submitButton }
}

test('renders a form with title, content, tags, and a submit', async () => {
  const preDate = new Date().getTime()
  mockSavePost.mockResolvedValueOnce()
  const { submitButton } = renderPostEditor()
  user.click(submitButton)
  const postDate = new Date().getTime()
  const date = new Date(mockSavePost.mock.calls[0][0].date).getTime()

  expect(date).toBeGreaterThanOrEqual(preDate)
  expect(date).toBeLessThanOrEqual(postDate)

  expect(submitButton).toBeDisabled()
  expect(mockSavePost).toHaveBeenCalledWith({ ...fakePost, date: expect.any(String), authorId: fakeUser.id })
})

test('renders an error message from the server', async () => {
  const testError = 'test error'
  mockSavePost.mockRejectedValueOnce({ data: { error: testError } })
  const { submitButton } = renderPostEditor()
  user.click(submitButton)
  const postError = await screen.findByRole('alert')

  expect(postError).toHaveTextContent(testError)
  expect(submitButton).not.toBeDisabled()
})