import { Logo } from '.'
import renderer from 'react-test-renderer'


test('renders main logo component', () => {
  const logo = renderer.create(<Logo />).toJSON()
  expect(logo).toMatchSnapshot()
})
