import React             from 'react'

import { Header }        from '@components/header'
import { TodoListItem }  from '@components/todo-list-item'
import { Button }        from '@ui/button'
import { Input }         from '@ui/input'
import { Container }     from '@ui/layout'
import { UnorderedList } from '@ui/list'

export const App = () => {
  return (
    <>
      <Container>
        <Header title='todo' tasksCompletion='5 задач, из них выполнено 1' />
        <Container>
          <Input type='search' placeholder='найдите задачу' />
          <Button type='button'>Все</Button>
          <Button type='button'>Выполненные</Button>
        </Container>
        <UnorderedList>
          <TodoListItem>learn react</TodoListItem>
          <TodoListItem>learn git</TodoListItem>
          <TodoListItem>make app</TodoListItem>
        </UnorderedList>
        <Input type='text' placeholder='введите задачу' />
        <Button type='submit'>Добавить</Button>
      </Container>
    </>
  )
}
