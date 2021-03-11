import { initialState, quickBooksReducer } from '../store/quickBooks.reducer'
import { setFormValuesAction } from '../store/quickBooks.action'

describe("Testing the quick book reducer", () => {
  it("should handle SET_FORM_VALUES", () => {
    const expected = {
      values: {
        commisions: 0,
        construction: 0,
        income: 0,
        other: 7
      },
      sum: 0
    }
    expect(quickBooksReducer(initialState, setFormValuesAction('other', 7))).toEqual(expected)
  })
})
