import React           from 'react'

import { LayoutProps } from './types'

export const Row: React.FC<LayoutProps> = ({ children }) => {
  return <span>{children}</span>
}
