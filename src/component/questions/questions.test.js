import { Questions } from '.'
import renderer from 'react-test-renderer'


test('renders main questions component', () => {
  const questions = renderer.create(<Questions />).toJSON()
  expect(questions).toMatchSnapshot()
})
