import { useState } from "react"
import { savePost } from '../http-request/api'

export default function PostEditor({ user }) {
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()

    const { title, content, tags } = e.target.elements
    const newPost = {
      title: title.value,
      content: content.value,
      tags: tags.value.split(',').map(t => t.trim()),
      date: new Date().toISOString(),
      authorId: user.id
    }

    setIsSaving(true)
    savePost(newPost)
      .then()
      .catch(error => {
        setError(error.data.error)
        setIsSaving(false)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="id" />

      <label htmlFor="content">Content</label>
      <textarea name="content" id="content" cols="30" rows="10"></textarea>

      <label htmlFor="tags-input">Tags</label>
      <input type="text" id="tags-input" name="tags" />

      <button type="submit" disabled={isSaving}>Submit</button>

      {error ? <div role="alert">{error}</div> : null}
    </form>
  )
}