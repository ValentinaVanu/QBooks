import { TextField} from '@material-ui/core'
import styled from 'styled-components'


export const StyledTitle = styled.div`
  align-self: center;
  justify-self: start;
  line-height: 40px;
  font-size: 34px;
  font-weight: bold;
  padding-bottom: 2rem;

  @media screen and (min-width: 768px) {
    grid-column: 1/-1;
    grid-row: 1/2;

  }
`

export const StyledFormWrapper = styled.div`
  grid-template-rows: auto;
  grid-gap: 15px;
  padding: 2rem;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 4fr 4fr 1fr;
  }
`

export const StyledTextFieldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const StyledTextField = styled(TextField)`
  && {
    /* width: 100%; */
    margin: 15px 10px;
    background-color: #fff;

    .MuiOutlinedInput-root::before {
      content: '£';
      padding-left: 1rem;
    }
  }
`
