import { createContext, useReducer, useState } from "react";

export const MultiPage = createContext()

export function MultiPageProvider({ initialValues = {}, ...props }) {
  const [initState] = useState(initialValues)
  const [form, setFormValues] = useReducer(
    (s, a) => ({ ...s, ...a }),
    initState,
  )
  const resetForm = () => setFormValues(initialValues)

  return (
    <MultiPage.Provider
      value={{ form, setFormValues, resetForm }}
      {...props}
    />
  )
}