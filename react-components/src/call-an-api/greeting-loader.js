import { useState } from 'react'
import { loadGreeting } from './api'

export default function GrettingLoader() {
  const [greeting, setGreeting] = useState('')

  async function loadGreetingForInput(e) {
    e.preventDefault()
    const { data } = await loadGreeting(e.target.elements.name.value)
    setGreeting(data.gretting)
  }

  return (
    <form onSubmit={loadGreetingForInput}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <button type="submit">Load Greeting</button>
      <div aria-label="greeting">{greeting}</div>
    </form>
  )
}