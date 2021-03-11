import { Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setFormValuesAction } from '../../store/quickBooks.action'
import { CalculatorTotal } from '../calculator-total/calculator-total.component'

import * as SFC from './form-calculator.style'

const FormCalculator = () => {
  const dispatch = useDispatch()

  const initialValues = {
    income: 0,
    construction: 0,
    commisions: 0,
    other: 0,
  }
  const initialLabels = {
    income: 'Income from sales',
    construction: 'Construction',
    commisions: 'Commisions',
    other: 'Other income',
  }

  const handleInputChange = (e, setFieldValue) => {
    setFieldValue(e.target.name, e.target.value)
    dispatch(setFormValuesAction(e.target.name, e.target.value))
    console.log(e.target.name, e.target.value)
  }
  return (
    <Formik
    initialValues={initialValues}
    // validate={validate}
    // onSubmit={submit}
    >
      {({ values, handleBlur, handleChange, isValid, errors, touched, setFieldValue, ...r }) => (
        <Form>
          <SFC.StyledFormWrapper>
              <SFC.StyledTitle>The QuickBook Calculator</SFC.StyledTitle>
            {Object.keys(values).map( (element, key) => <SFC.StyledTextFieldWrapper key={key}>
              <SFC.StyledTextField
                fullWidth
                id={element}
                name={element}
                type="number"
                label={initialLabels[element]}
                variant="outlined"
                value={values[element]}
                onChange={e => {handleInputChange(e, setFieldValue)}}
              />
            </SFC.StyledTextFieldWrapper>)}
            <CalculatorTotal/>
          </SFC.StyledFormWrapper>
        </Form>
      )}
    </Formik>
  )
}

export { FormCalculator }
