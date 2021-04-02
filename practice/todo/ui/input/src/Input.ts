import styled, { StyledComponent } from '@emotion/styled'
import { flexbox, layout, space }  from 'styled-system'

import { InputProps }              from './types'

export const Input: StyledComponent<InputProps> = styled.input(layout, space, flexbox)
