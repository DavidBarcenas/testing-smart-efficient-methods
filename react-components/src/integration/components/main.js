import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <h1>Welcome home</h1>
      <Link to="/page-1">Fill out the form</Link>
    </div>
  )
}