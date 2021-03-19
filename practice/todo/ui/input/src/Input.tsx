import React          from 'react'

import { InputProps } from './types'

export const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} />
}
