import { Link } from "react-router-dom";

export default function Error({ location }) {
  const state = location
  return (
    <>
      <div>Oh no. There was an error.</div>
      <pre>{state.error.message}</pre>
      <Link to="/">Go Home</Link>
      <Link to="/confirm">Try again</Link>
    </>
  )
}