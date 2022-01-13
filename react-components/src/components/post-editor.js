export default function PostEditor() {
  return <form>
    <label htmlFor="title">Title</label>
    <input type="text" id="title" />

    <label htmlFor="content">Content</label>
    <textarea name="content" id="content" cols="30" rows="10"></textarea>

    <label htmlFor="tags-input">Tags</label>
    <input type="text" id="tags-input" />

    <button type="submit">Submit</button>
  </form>
}