import { TodoListItem } from '@ui/todo-list-item'

import './TodoList.css'

export const TodoList = () => {
  return (
    <ul className="app-list list-group">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </ul>
  )
}
