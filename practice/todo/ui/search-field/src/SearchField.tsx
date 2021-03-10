import './SearchField.css'

import React     from 'react'

import { Input } from '@ui/input'

export const SearchField = () => {
  return (
    <Input
      className='form-control search-input'
      type='text'
      placeholder='введите для поиска задачи'
    />
  )
}
