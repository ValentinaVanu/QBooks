import styled from 'styled-components'
import { Paper } from '@material-ui/core'

export const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  && {
    background-color: #eceef1;
  }

  @media screen and (min-width: 768px) {
    width: 55rem;
  }
`
