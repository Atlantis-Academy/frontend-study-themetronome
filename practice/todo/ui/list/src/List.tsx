import React         from 'react'

import { ListProps } from './types'

export const UnorderedList: React.FC<ListProps> = ({ children }) => {
  return <ul>{children}</ul>
}

export const OrderedList: React.FC<ListProps> = ({ children }) => {
  return <ol>{children}</ol>
}
