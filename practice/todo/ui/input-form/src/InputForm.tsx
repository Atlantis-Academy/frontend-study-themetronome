import './InputForm.css'

import React      from 'react'

import { Button } from '@ui/button'
import { Input }  from '@ui/input'

export const InputForm = () => {
  return (
    <form className='bottom-panel d-flex'>
      <Input
        type='text'
        placeholder='введите название задачи'
        className='form-control new-post-label'
      />
      <Button type='submit' className='btn btn-outline-secondary'>
        добавить
      </Button>
    </form>
  )
}
