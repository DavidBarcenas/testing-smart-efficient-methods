import { Link } from "react-router-dom"
import { useForm } from "../hooks/use-form"

export default function Page2({ history }) {
  const { form, setFormValues } = useForm()
  return (
    <>
      <h2>Page 2</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          history.push('/confirm')
        }}
      >
        <label htmlFor="drink">Favorite Drink</label>
        <input
          id="drink"
          value={form.drink}
          onChange={(e) => setFormValues({ drink: e.target.value })}
        />
      </form>
      <Link to="/page-1">Go Back</Link> | <Link to="/confirm">Review</Link>
    </>
  )
}