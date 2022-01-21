import { useForm } from "../hooks/use-form"
import { submitForm } from '../../http-request/api'
import { Link, useNavigate } from "react-router-dom"

export default function Confirm() {
  const { form } = useForm()
  let navigate = useNavigate();

  function handleConfirmClick() {
    submitForm(form).then(
      () => {
        navigate('/success')
      },
      (error) => {
        navigate('/error')
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