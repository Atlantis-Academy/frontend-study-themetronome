/* eslint-disable react/button-has-type */
import React           from 'react'

import { ButtonProps } from './types'

export const Button: React.FC<ButtonProps> = ({ type, children }) => {
  return <button type={type}>{children}</button>
}
