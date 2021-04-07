import React                   from 'react'

import { Header }              from '@components/header'
import { TodoListItem }        from '@components/todo-list-item'
import { Button }              from '@ui/button'
import { Input }               from '@ui/input'
import { Box, Column, Layout } from '@ui/layout'

export const App = () => {
  return (
    <>
      <Box
        maxWidth='500px'
        margin='0 auto'
        padding='10px'
        border='1px solid #b5b5b5'
        borderRadius='4px'
      >
        <Header title='todo list' tasksStatus='3 more to do, 0 done' />
        <Layout display='flex' margin='16px 0'>
          <Input
            type='search'
            placeholder='найдите задачу'
            width='auto'
            height='35px'
            border='2px solid #b5b5b5'
            flexGrow='1'
            mr='3px'
          />
          <Button type='button' border='1px solid #5665db'>
            Все
          </Button>
          <Button type='button' border='1px solid #5fcf7d'>
            Выполненные
          </Button>
        </Layout>
        <Column>
          <TodoListItem>learn react</TodoListItem>
          <TodoListItem>learn redux</TodoListItem>
          <TodoListItem>make app</TodoListItem>
        </Column>
        <Layout mt='20px' display='flex'>
          <Input
            type='text'
            placeholder='введите задачу'
            width='auto'
            flexGrow='1'
            mr='3px'
            height='40px'
            border='2px solid #b5b5b5'
          />
          <Button type='submit' border='2px solid #20b6d4'>
            Добавить
          </Button>
        </Layout>
      </Box>
    </>
  )
}
