import {
  __,
  countBy,
  equals,
  gte,
  has,
  identity,
  test as t,
  where
} from 'ramda'

const letterCount = countBy(identity)

const search = (words, green, yellow, grey) => {
  const shape = {}
  green.forEach((letter) => {
    if (letter === null) return
    shape[letter] = has(letter, shape) ? shape[letter] + 1 : 1
  })
  yellow.forEach((place) =>
    place.forEach((letter) => {
      if (letter === null) return
      shape[letter] = has(letter, shape) ? shape[letter] + 1 : 1
    })
  )
  grey.forEach((letter) => {
    if (!has(letter, shape)) {
      shape[letter] = 0
    }
  })
  Object.keys(shape).forEach((letter) => {
    if (shape[letter] === 0) {
      shape[letter] = x => x === 0 || typeof x === 'undefined'
    } else {
      if (grey.indexOf(letter) < 0) {
        shape[letter] = gte(__, shape[letter])
      } else {
        shape[letter] = equals(shape[letter])
      }
    }
  })
  const rightShaped = words.filter((x) => where(shape, letterCount(x)))
  const greyFilter = grey.join('')
  const wordFilter = RegExp(
    green.map((x, i) => {
      if (typeof x === 'string') {
        return x
      }
      if (yellow[i].length + grey.length === 0) {
        return '.'
      }
      return `[^${yellow[i].join('')}${greyFilter}]`
    }).join('')
  )
  const output = rightShaped.filter(t(wordFilter))
  return output
}

export default search
