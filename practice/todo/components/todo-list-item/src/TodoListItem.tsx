import React                 from 'react'

import { Button }            from '@ui/button'
import { Box, Row }          from '@ui/layout'
import { Text }              from '@ui/text'

import { TodoListItemProps } from './types'

export const TodoListItem: React.FC<TodoListItemProps> = ({ children }) => {
  return (
    <Box position='relative' display='flex' mb='1px' width='100%' justifyContent='space-between'>
      <Text>{children}</Text>
      <Row>
        <Button type='button' backgroundColor='#f72100' width='100%' fontSize='10px'>
          Удалить
        </Button>
        <Button type='button' backgroundColor='#f5c905' width='100%' fontSize='10px'>
          В избранное
        </Button>
      </Row>
    </Box>
  )
}
