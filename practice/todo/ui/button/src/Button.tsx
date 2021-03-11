import React from 'react'

export const Button = ({ children, className = null }) => {
  return (
    <button className={className} type='button'>
      {children}
    </button>
  )
}
