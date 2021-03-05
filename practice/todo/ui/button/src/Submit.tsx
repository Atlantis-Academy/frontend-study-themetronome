import React from 'react'

export const Submit: React.FC<{ children: string; className: string }> = ({
  children,
  className,
}) => {
  return (
    <button type="submit" {...className}>
      {children}
    </button>
  )
}
