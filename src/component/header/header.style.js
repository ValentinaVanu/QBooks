import styled from 'styled-components'

export const StyledHWrapper = styled.div`
  width: 100%;
  
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
