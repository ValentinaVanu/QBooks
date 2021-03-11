import { Item } from '.'
import renderer from 'react-test-renderer'
import { Router } from '@reach/router'


test('renders main item component', () => {
  const item = renderer.create(<Router><Item path="/item/:itemId"/></Router>).toJSON()
  expect(item).toMatchSnapshot()
})
