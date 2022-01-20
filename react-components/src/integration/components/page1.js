import { Link } from "react-router-dom"
import { useForm } from "../hooks/use-form"

export default function Page1({ history }) {
  const { form, setFormValues } = useForm()
  return (
    <>
      <h2>Page 1</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          history.push('/page-2')
        }}
      >
        <label htmlFor="food">Favorite Food</label>
        <input
          id="food"
          value={form.food}
          onChange={(e) => setFormValues({ food: e.target.value })}
        />
      </form>
      <Link to="/">Go Home</Link> | <Link to="/page-2">Next</Link>
    </>
  )
}