import React from 'react'
import { Provider } from 'react-redux'
import { Header } from '../header/header.component'
import { Calculator } from '../calculator'
import { Questions } from '../questions'
import { StyledAppWrapper } from './app.style'
import store from '../../store'
import { Item } from '../item'
import { Router } from '@reach/router'

const App = () => {
  return (
    <Provider store={store}>
      <StyledAppWrapper>
        <Header />
        <Router>
          <Item path="/item/:itemId"/>
          <Calculator path="/"/>
        </Router>

        <Questions />
      </StyledAppWrapper>
    </Provider>
  )
}

export { App }
