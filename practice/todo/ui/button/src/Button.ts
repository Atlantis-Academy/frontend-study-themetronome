import styled, { StyledComponent }                          from '@emotion/styled'
import { border, color, layout, space, system, typography } from 'styled-system'

import { ButtonProps }                                      from './types'

export const Button: StyledComponent<ButtonProps> = styled.button(
  system({ boxSizing: true }),
  color,
  layout,
  typography,
  border,
  space,
)

Button.defaultProps = {
  backgroundColor: 'transparent',
  padding: '5px',
  borderRadius: '5px',
  transition: 'background-color .15s ease-in-out',
}
