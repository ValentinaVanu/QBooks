import * as constant from './quickBooks.constant'

export const setFormValuesAction = (name, value) => ({
  type: constant.SET_FORM_VALUES,
  name,
  value,
})

