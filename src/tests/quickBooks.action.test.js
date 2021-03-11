import * as constant from '../store/quickBooks.constant'
import * as action from '../store/quickBooks.action'

const name = ''
const value = ''

describe("Testing all quick books actions", () => {
  it("should create an action to set values", () => {
    expect(action.setFormValuesAction(name, value)).toEqual({
      type: constant.SET_FORM_VALUES,
      name,
      value
    })
  })
})
