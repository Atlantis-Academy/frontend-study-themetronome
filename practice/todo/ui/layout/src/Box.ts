import styled, { StyledComponent }                                 from '@emotion/styled'
import { border, color, flexbox, layout, position, space, system } from 'styled-system'

import { LayoutProps }                                             from './types'

export const Box: StyledComponent<LayoutProps> = styled.div(
  system({ boxSizing: true }),
  layout,
  space,
  flexbox,
  color,
  position,
  border,
)

Box.defaultProps = {
  boxSizing: 'border-box',
}
