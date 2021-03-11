import * as constant from './quickBooks.constant'

export const initialState = {
  values: {
    income: 0,
    commisions: 0,
    construction: 0,
    other: 0,
  },
  sum: 0,
}

export const quickBooksReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case constant.SET_FORM_VALUES:
      return {
        ...state,
        values: {
          ...state.values,
          [action.name]: +action.value
        }
      }
    default:
      return state
  }
}
