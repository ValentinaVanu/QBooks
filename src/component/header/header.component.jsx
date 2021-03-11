import React from 'react'
import { Logo } from '../logo/logo.component'
import { QNav } from '../nav/nav.component'
import { StyledHWrapper } from './header.style'

const Header = () => {
  return (
    <StyledHWrapper>
      <Logo />
      <QNav />
    </StyledHWrapper>
  )
}

export { Header }
