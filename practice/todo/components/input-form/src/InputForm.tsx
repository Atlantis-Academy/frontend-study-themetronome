import { Input } from '@ui/input'
import { Submit } from '@ui/button'

import './InputForm.css'

export const InputForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <Input type="text" placeholder="Добавьте задачу" className="form-control new-post-label" />
      <Submit className="btn btn-outline-secondary">Добавить</Submit>
    </form>
  )
}
