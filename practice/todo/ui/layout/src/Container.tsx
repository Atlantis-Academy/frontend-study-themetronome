import React           from 'react'

import { LayoutProps } from './types'

export const Container: React.FC<LayoutProps> = ({ children }) => {
  return <div>{children}</div>
}
