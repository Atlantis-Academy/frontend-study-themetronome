import React           from 'react'

import { Row }         from '@ui/layout'
import { Text }        from '@ui/text'

import { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = ({ title, tasksStatus }) => {
  return (
    <Row alignItems='flex-end' justifyContent='space-between'>
      <Text fontSize='24px'>{title}</Text>
      <Text fontSize='12px'>{tasksStatus}</Text>
    </Row>
  )
}
