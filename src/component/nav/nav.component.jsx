import React from 'react'
import { StyledItem, StyledNavWrapper } from './nav.style'

const QNav = () => {
  return (
    <StyledNavWrapper>
      <StyledItem to="/item/1">item1</StyledItem>
      <StyledItem to="/item/2">item2</StyledItem>
      <StyledItem to="/item/3">item3</StyledItem>
    </StyledNavWrapper>
  )
}

export { QNav }
