import { useState } from 'react'

export default function FavoriteNumber(min = 1, max = 10) {
  const [number, setNumber] = useState(0)
  const [numberEntered, setNumberEntered] = useState(false)

  function handleChange(event) {
    setNumber(+event.target.value)
    setNumberEntered(true)
  }

  const isValid = !numberEntered || (number >= min && number <= max)

  return (
    <div>
      <label htmlFor="favorite_number">Favorite number</label>
      <input
        id="favorite-number"
        type="number"
        value={number}
        onChange={handleChange}
      />
      {isValid ? null : <div role="alert">The number is invalid</div>}
    </div>
  )
}