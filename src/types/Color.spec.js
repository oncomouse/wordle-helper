import Color, { ColorType } from './Color'
import PropTypes from 'prop-types'

const original = console.error
beforeEach(() => {
  console.error = jest.fn()
})

afterEach(() => {
  console.error = original
})
describe('Testing Color', () => {
  test('Colors should ID as themselves', () => {
    const a = Color.Green('a')
    expect(Color.Green.is(a)).toBe(true)
  })
  test('Colors.x should return the letter being stored', () => {
    const a = Color.Yellow('a')
    expect(a.x).toBe('a')
  })
  test('Color.new should return a Grey', () => {
    expect(Color.Grey.is(Color.new('a'))).toBe(true)
  })
  test('Color.White should not update', () => {
    const a = Color.White
    expect(Color.White.is(Color.White.update(a))).toBe(true)
  })
  test('Color.White should return "" when .get() is called', () => {
    expect(Color.White.get()).toBe('')
  })
  test('Color.Yellow should return contents when .get() is calledc', () => {
    const contents = 'a'
    expect(Color.Yellow(contents).get()).toBe(contents)
  })
  test('Color.Green should return contents when .get() is calledc', () => {
    const contents = 'a'
    expect(Color.Green(contents).get()).toBe(contents)
  })
  test('Color.Grey should return contents when .get() is calledc', () => {
    const contents = 'a'
    expect(Color.Grey(contents).get()).toBe(contents)
  })
  test('It should validate PropTypes', () => {
    PropTypes.checkPropTypes({
      a: ColorType
    }, {
      a: Color.Yellow('x')
    }, 'prop', 'MyComponent')
    expect(console.error).toBeCalledTimes(0)
    PropTypes.checkPropTypes({
      a: ColorType
    }, {
      a: 'foo'
    }, 'prop', 'MyComponent')
    expect(console.error).toBeCalled()
  })
})
