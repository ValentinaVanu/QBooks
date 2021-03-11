import React from 'react'
import { CalculatorTotal } from '../calculator-total/calculator-total.component';
import { FormCalculator } from '../form-calculator/form-calculator.component';
import { Share } from '../share';

import * as SC from './calculator.style'

const Calculator = () => {

  return (
    <SC.StyledPaper elevation={6}>
      <FormCalculator />
      {/* <CalculatorTotal /> */}
      <Share />
    </SC.StyledPaper >
  )
}

export { Calculator }
