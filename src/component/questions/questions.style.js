import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';


export const StyledQTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin: 1rem;
`

export const StyledQWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 880px;
  }
`

export const useStyles = makeStyles((theme) => ({
  // root: {
  //   padding: '2rem 0',
  //   width: '100%',
  // },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))
