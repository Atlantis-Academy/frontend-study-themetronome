import React           from 'react'

import { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = ({ title, tasksCompletion }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{tasksCompletion}</h2>
    </>
  )
}
