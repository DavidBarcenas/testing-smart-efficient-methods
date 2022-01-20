import { useForm } from "../hooks/use-form"
import { submitForm } from '../../http-request/api'
import { Link } from "react-router-dom"

export default function Confirm({ history }) {
  const { form, resetForm } = useForm()

  function handleConfirmClick() {
    submitForm(form).then(
      () => {
        // resetForm()
        history.push('/success')
      },
      (error) => {
        history.push('/error', { state: { error } })
      },
    )
  }
  return (
    <>
      <h2>Confirm</h2>
      <div>
        <strong>Please confirm your choices</strong>
      </div>
      <div>
        <strong id="food-label">Favorite Food</strong>:
        <span aria-labelledby="food-label">{form.food}</span>
      </div>
      <div>
        <strong id="drink-label">Favorite Drink</strong>:
        <span aria-labelledby="drink-label">{form.drink}</span>
      </div>
      <Link to="/page-2">Go Back</Link>
      <button onClick={handleConfirmClick}>Confirm</button>
    </>
  )
}