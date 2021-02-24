import TodoListItem from '../todo-list-item'

import './TodoList.css'

const TodoList = () => {
  return (
    <ul className="app-list list-group">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </ul>
  )
}

export default TodoList
