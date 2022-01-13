import { useState } from "react"

export default function PostEditor() {
  const [isSaving, setIsSaving] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setIsSaving(true)
  }

  return <form onSubmit={handleSubmit}>
    <label htmlFor="title">Title</label>
    <input type="text" id="title" />

    <label htmlFor="content">Content</label>
    <textarea name="content" id="content" cols="30" rows="10"></textarea>

    <label htmlFor="tags-input">Tags</label>
    <input type="text" id="tags-input" />

    <button type="submit" disabled={isSaving}>Submit</button>
  </form>
}