import { Share } from '.'
import renderer from 'react-test-renderer'


test('renders share app component', () => {
  const share = renderer.create(<Share />).toJSON()
  expect(share).toMatchSnapshot()
})
