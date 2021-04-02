import React           from 'react'

import { Row }         from '@ui/layout'
import { Text }        from '@ui/text'

import { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = ({ title, tasksCompletion }) => {
  return (
    <Row alignItems='flex-end' justifyContent='space-between'>
      <Text>{title}</Text>
      <Text>{tasksCompletion}</Text>
    </Row>
  )
}
