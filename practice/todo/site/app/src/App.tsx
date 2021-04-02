import React            from 'react'

import { Header }       from '@components/header'
import { TodoListItem } from '@components/todo-list-item'
import { Button }       from '@ui/button'
import { Input }        from '@ui/input'
import { Box, Column }  from '@ui/layout'

export const App = () => {
  return (
    <>
      <Box maxWidth='500px' margin='0 auto'>
        <Header title='todo' tasksCompletion='5 задач, из них выполнено 1' />
        <Box display='flex' margin='16px 0'>
          <Input type='search' placeholder='найдите задачу' width='auto' flexGrow='1' mr='3px' />
          <Button type='button'>Все</Button>
          <Button type='button'>Выполненные</Button>
        </Box>
        <Column>
          <TodoListItem>learn react</TodoListItem>
          <TodoListItem>learn git</TodoListItem>
          <TodoListItem>make app</TodoListItem>
        </Column>
        <Box mt='20px' display='flex'>
          <Input type='text' placeholder='введите задачу' width='auto' flexGrow='1' mr='3px' />
          <Button type='submit'>Добавить</Button>
        </Box>
      </Box>
    </>
  )
}
