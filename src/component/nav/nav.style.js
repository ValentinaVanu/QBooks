import styled from 'styled-components'
import { Link } from '@reach/router'

export const StyledItem = styled(Link)`
  padding: 1rem;
  font-size: 20px;
  text-decoration: none;
  color: #000;
`

export const StyledNavWrapper = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
`
