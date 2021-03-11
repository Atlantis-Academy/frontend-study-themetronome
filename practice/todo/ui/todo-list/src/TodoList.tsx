import './TodoList.css'

import React            from 'react'

import { TodoListItem } from '@ui/todo-list-item'

export const TodoList = () => {
  return (
    <ul className='app-list list-group'>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </ul>
  )
}
