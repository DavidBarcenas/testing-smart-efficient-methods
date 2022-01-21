import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div>
      <h2>Congrats. You did it.</h2>
      <div>
        <Link to="/">Go home</Link>
      </div>
    </div>
  )
}