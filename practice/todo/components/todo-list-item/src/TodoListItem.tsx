import React from 'react'

import { Button } from '@ui/button'
import { FavoriteIcon, TrashIcon } from '@ui/icons'
import { Box, Row } from '@ui/layout'

import './TodoListItem.css'

export const TodoListItem: React.FC = () => {
  return (
    <li className="app-list-item d-flex justify-content-between">
      <Row className="app-list-item-label">learn react</Row>
      <Box className="d-flex justify-content-center align-items-center">
        <Button className="btn-star btn-sm">
          <FavoriteIcon />
        </Button>
        <Button className="btn-trash btn-sm">
          <TrashIcon />
        </Button>
      </Box>
    </li>
  )
}
