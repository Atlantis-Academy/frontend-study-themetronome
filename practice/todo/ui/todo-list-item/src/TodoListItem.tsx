import { Box, Row } from '@ui/layout'
import { Button } from '@ui/button'

import './TodoListItem.css'

export const TodoListItem = () => {
  return (
    <li className="app-list-item d-flex justify-content-between">
      <Row className="app-list-item-label">learn react</Row>
      <Box className="d-flex justify-content-center align-items-center">
        <Button className="btn-star btn-sm">
          <i className="fa fa-star"></i>
        </Button>
        <Button className="btn-trash btn-sm">
          <i className="fa fa-trash-o"></i>
        </Button>
        <i className="fa fa-heart"></i>
      </Box>
    </li>
  )
}
