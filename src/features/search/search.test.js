import search from './index'
import Color from '../../types/Color'

const words = ['aback', 'elbow', 'eleve', 'every']

describe('Test matching yellow', () => {
  // test('should return all words when no letters are passed', () => {
  //   expect(
  //     search(words, [])
  //   ).toStrictEqual(words)
  // })
  // test('should return every, eleve, and elbow with 1 yellow e in last position', () => {
  //   expect(
  //     search(words, [[Color.Grey('x'), Color.Grey('x'), Color.Grey('x'), Color.Yellow('e'), Color.Grey('x')]])
  //   ).toStrictEqual(['elbow', 'eleve', 'every'])
  // })
  // test("should return every and eleve with 2 yellow e's", () => {
  //   expect(
  //     search(words, [[Color.Grey('x'), Color.Yellow('e'), Color.Grey('x'), Color.Yellow('e'), Color.Grey('x')]])
  //   ).toStrictEqual(['eleve', 'every'])
  // })
  // test('should return every and veery when passed a complex yellow', () => {
  //   expect(
  //     search(['every', 'veery'], [[Color.Yellow('y'), Color.Yellow('r'), Color.Grey('x'), Color.Yellow('e'), Color.Grey('x')]])
  //   ).toStrictEqual(['every', 'veery'])
  // })
})
describe('Test matching grey', () => {
  // test('should return all words when no letters are passed', () => { expect(search(words, [])).toStrictEqual(words) })
  // test('should return every, eleve, and elbow with 1 k', () => {
  //   expect(
  //     search(words, [[Color.Grey('k'), Color.Grey('x'), Color.Grey('x'), Color.Grey('x'), Color.Grey('x')]])
  //   ).toStrictEqual(['elbow', 'eleve', 'every'])
  // })
  // test('should return aback with 1 e', () => {
  //   expect(
  //     search(words, [[Color.Grey('e'), Color.Grey('x'), Color.Grey('x'), Color.Grey('x'), Color.Grey('x')]])
  //   ).toStrictEqual(['aback'])
  // })
  // test('should return [] with 1 e and 1 k', () => {
  //   expect(
  //     search(words, [[Color.Grey('k'), Color.Grey('e'), Color.Grey('x'), Color.Grey('x'), Color.Grey('x')]])
  //   ).toStrictEqual([])
  // })
})
describe('Test matching greens', () => {
  // test('should return all words when no letters are passed', () => { expect(search(words, [])).toStrictEqual(words) })
  // test('should return e-starting words when passed e....', () => {
  //   expect(
  //     search(words, [[Color.Green('e'), Color.Grey('x'), Color.Grey('x'), Color.Grey('x'), Color.Grey('x')]])
  //   ).toStrictEqual(['elbow', 'eleve', 'every'])
  // })
  // test('should return eleve and every when passed e.e..', () => {
  //   expect(
  //     search(words, [[Color.Green('e'), Color.Grey('x'), Color.Green('e'), Color.Grey('x'), Color.Grey('x')]])
  //   ).toStrictEqual(['eleve', 'every'])
  // })
})
describe('Test matching a mix of all three', () => {
  // test('should return eleve and every when passed e.... and a yellow "e"', () => {
  //   expect(
  //     search(words, [[Color.Green('e'), Color.Yellow('e'), Color.Grey('x'), Color.Grey('x'), Color.Grey('x')]])
  //   ).toStrictEqual(['eleve', 'every'])
  // })
  // test('should return eleve when passed e.... and 2 yellow "e"', () => {
  //   expect(
  //     search(words, [[Color.Green('e'), Color.Yellow('e'), Color.Grey('x'), Color.Yellow('e'), Color.Grey('x')]])
  //   ).toStrictEqual(['eleve'])
  // })
  // test('should return elbow when passed e.... and a yellow "w"', () => {
  //   expect(
  //     search(words, [[Color.Green('e'), Color.Yellow('w'), Color.Grey('x'), Color.Grey('x'), Color.Grey('x')]])
  //   ).toStrictEqual(['elbow'])
  // })
  // test('should return when passed e.e.. and a grey "l"', () => {
  //   expect(
  //     search(words, [[Color.Green('e'), Color.Grey('l'), Color.Green('e'), Color.Grey('x'), Color.Grey('x')]])
  //   ).toStrictEqual(['every'])
  // })
  // test('should return "adore" when passed a two matches that only match that word.', () => {
  //   expect(
  //     search(['adore', 'argue', 'reast'], [[Color.Yellow('r'), Color.Yellow('e'), Color.Yellow('a'), Color.Grey('s'), Color.Grey('t')], [Color.Green('a'), Color.Yellow('r'), Color.Grey('g'), Color.Grey('u'), Color.Green('e')]])
  //   ).toStrictEqual(['adore'])
  // })
  test('should pass this weird error we\'re having', () => {
    expect(
      search(['reast', 'since', 'spell', 'sleek'], [
        [Color.Grey('r'), Color.Yellow('e'), Color.Grey('a'), Color.Yellow('s'), Color.Grey('t')],
        [Color.Green('s'), Color.Grey('i'), Color.Grey('n'), Color.Grey('c'), Color.Yellow('e')],
        [Color.Green('s'), Color.Grey('p'), Color.Green('e'), Color.Yellow('l'), Color.Grey('l')]
      ])
    ).toStrictEqual(['sleek'])
  })
})
