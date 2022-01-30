import search from './index'

const words = ['aback', 'elbow', 'eleve', 'every']

describe('Test matching yellow', () => {
  test('should return all words when no letters are passed', () => {
    expect(search(words, [null, null, null, null, null], [], [])).toStrictEqual(words)
  })
  test('should return every, eleve, and elbow with 1 e', () => {
    expect(search(words, [null, null, null, null, null], ['e'], [])).toStrictEqual(['elbow', 'eleve', 'every'])
  })
  test("should return every and eleve with 2 e's", () => {
    expect(search(words, [null, null, null, null, null], ['e', 'e'], [])).toStrictEqual(['eleve', 'every'])
  })
  test("should return eleve with 3 e's", () => {
    expect(search(words, [null, null, null, null, null], ['e', 'e', 'e'], [])).toStrictEqual(['eleve'])
  })
})
describe('Test matching grey', () => {
  test('should return all words when no letters are passed', () => {
    expect(search(words, [null, null, null, null, null], [], [])).toStrictEqual(words)
  })
  test('should return every, eleve, and elbow with 1 k', () => {
    expect(search(words, [null, null, null, null, null], [], ['k'])).toStrictEqual(['elbow', 'eleve', 'every'])
  })
  test('should return aback with 1 e', () => {
    expect(search(words, [null, null, null, null, null], [], ['e'])).toStrictEqual(['aback'])
  })
  test('should return [] with 1 e and 1 k', () => {
    expect(search(words, [null, null, null, null, null], [], ['e', 'k'])).toStrictEqual([])
  })
})
describe('Test matching greens', () => {
  test('should return all words when no letters are passed', () => {
    expect(search(words, [null, null, null, null, null], [], [])).toStrictEqual(words)
  })
  test('should return e-starting words when passed e....', () => {
    expect(search(words, ['e', null, null, null, null], [], [])).toStrictEqual(['elbow', 'eleve', 'every'])
  })
  test('should return eleve and every when passed e.e..', () => {
    expect(search(words, ['e', null, 'e', null, null], [], [])).toStrictEqual(['eleve', 'every'])
  })
})
describe('Test matching a mix of all three', () => {
  test('should return eleve and every when passed e.... and a yellow "e"', () => {
    expect(search(words, ['e', null, null, null, null], ['e'], [])).toStrictEqual(['eleve', 'every'])
  })
  test('should return eleve when passed e.... and 2 yellow "e"', () => {
    expect(search(words, ['e', null, null, null, null], ['e', 'e'], [])).toStrictEqual(['eleve'])
  })
  test('should return elbow when passed e.... and a yellow "w"', () => {
    expect(search(words, ['e', null, null, null, null], ['w'], [])).toStrictEqual(['elbow'])
  })
  test('should return when passed e.e.. and a grey "l"', () => {
    expect(search(words, ['e', null, 'e', null, null], [], ['l'])).toStrictEqual(['every'])
  })
})
