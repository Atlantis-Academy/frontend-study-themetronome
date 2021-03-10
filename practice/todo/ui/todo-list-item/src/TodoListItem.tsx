import './TodoListItem.css'

import React        from 'react'

import { Button }   from '@ui/button'
import { Box, Row } from '@ui/layout'

export const TodoListItem = () => {
  return (
    <li className='app-list-item d-flex justify-content-between'>
      <Row className='app-list-item-label'>learn react</Row>
      <Box className='d-flex justify-content-center align-items-center'>
        <Button className='btn-star btn-sm'>
          <i className='fa fa-star' />
        </Button>
        <Button className='btn-trash btn-sm'>
          <i className='fa fa-trash-o' />
        </Button>
        <i className='fa fa-heart' />
      </Box>
    </li>
  )
}
