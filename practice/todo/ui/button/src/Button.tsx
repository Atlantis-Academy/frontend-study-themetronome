import React from 'react'

export const Button: React.FC<{ className: string }> = ({ children }) => {
  return <button type="button">{children}</button>
}
