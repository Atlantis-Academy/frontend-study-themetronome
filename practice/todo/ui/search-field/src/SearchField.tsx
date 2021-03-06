import { Input } from '@ui/input'

import './SearchField.css'

export const SearchField = () => {
  return (
    <Input
      className="form-control search-input"
      type="text"
      placeholder="введите для поиска задачи"
    />
  )
}
