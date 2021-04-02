import styled, { StyledComponent }           from '@emotion/styled'
import { color, layout, system, typography } from 'styled-system'

import { ButtonProps }                       from './types'

export const Button: StyledComponent<ButtonProps> = styled.button(
  system({ transition: true, boxSizing: true }),
  color,
  layout,
  typography,
)
