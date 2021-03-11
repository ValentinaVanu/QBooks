import styled from 'styled-components'

export const TotalNumber = styled.div`
  text-align: center;
  background: rgb(81,183,5);
  background: linear-gradient(52deg, rgba(81,183,5,1) 0%, rgba(23,190,139,1) 52%, rgba(26,196,190,1) 73%);
  color: #fff;
  line-height: 38px;
  font-weight: 700;
  padding: 2.5rem 5rem;
  font-size: 4rem;
  /* width: 350px; */

`
export const StyledTotalBody = styled.div`

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 10px;
    left: 10px;

  }
`

export const StyledTotalWrapper = styled.div`
  position: relative;
  font-weight: 700;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    grid-column: 3/4;
    grid-row: 2/4;
  }
`
