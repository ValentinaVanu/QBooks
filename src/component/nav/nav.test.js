import { QNav } from '.'
import renderer from 'react-test-renderer'


test('renders main nav component', () => {
  const nav = renderer.create(<QNav />).toJSON()
  expect(nav).toMatchSnapshot()
})
