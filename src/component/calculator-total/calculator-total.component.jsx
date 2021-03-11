import React from 'react'
import { useSelector } from 'react-redux'
import { StyledTotalBody, StyledTotalWrapper, TotalNumber } from './calculator-total.style'

const CalculatorTotal = () => {
  const values = useSelector(({ Qbooks }) => Qbooks.values)

  const sum = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 0 }).format(Object.values(values).reduce((a, c) => a + c, 0))
  return (
    <StyledTotalWrapper>
      <StyledTotalBody>
        <div>Total</div>
        <TotalNumber>{sum}</TotalNumber>
      </StyledTotalBody>
    </StyledTotalWrapper>
  )
}

export { CalculatorTotal }
