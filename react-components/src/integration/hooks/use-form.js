import { useContext } from "react"
import { MultiPage } from "../store/provider"

export function useForm() {
  const context = useContext(MultiPage)
  if (!context) {
    throw new Error(
      'useMultiPageForm must be used within a MiltiPageFormProvider',
    )
  }
  return context
}