import { Link } from '@reach/router'
import styled from 'styled-components'
import QBLogo from '../img/qb-logo.svg'

export const StyledLogoWrapper = styled(Link)`
  align-self: flex-start;
  background-image: url(${QBLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 50px;
  width: 200px;
  margin: 1rem;
`

