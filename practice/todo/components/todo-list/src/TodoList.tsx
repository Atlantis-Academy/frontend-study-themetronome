import React from 'react'

import { TodoListItem } from '@components/todo-list-item'

import './TodoList.css'

export const TodoList: React.FC = () => {
  return (
    <ul className="app-list list-group">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </ul>
  )
}
