import { render, screen, } from '@testing-library/react'
import user from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { savePost as mockSavePost } from '../http-request/api'
import PostEditor from '../components/post-editor'

jest.mock('../http-request/api')

afterAll(() => jest.clearAllMocks())

test('renders a form with title, content, tags, and a submit', async () => {
  mockSavePost.mockResolvedValueOnce()
  const fakeUser = { id: 'user-1' }
  const fakePost = {
    title: 'Test title',
    content: 'Test content',
    tags: ['tag1', 'tag2']
  }
  render(<PostEditor user={fakeUser} />, { wrapper: BrowserRouter })
  const submitButton = screen.getByText(/submit/i)
  user.type(screen.getByLabelText(/title/i), fakePost.title)
  user.type(screen.getByLabelText(/content/i), fakePost.content)
  user.type(screen.getByLabelText(/tags/i), fakePost.tags.join(','))
  user.click(submitButton)

  expect(submitButton).toBeDisabled()
  expect(mockSavePost).toHaveBeenCalledWith({ ...fakePost, authorId: fakeUser.id })
})