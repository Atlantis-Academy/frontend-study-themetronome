import React              from 'react'

import { Button }         from '@ui/button'
import { Container, Row } from '@ui/layout'

export const TodoListItem = ({ children = null }) => {
  return (
    <li>
      <Row>{children}</Row>
      <Container>
        <Button type='button'>{children}</Button>
        <Button type='button'>{children}</Button>
      </Container>
    </li>
  )
}
