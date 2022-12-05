import {
  __,
  countBy,
  equals,
  forEachObjIndexed,
  gte,
  has,
  identity,
  test as t,
  where
} from 'ramda'

const letterCount = countBy(identity)

const search = (words, guesses) => {
  const shape = {}
  const grey = []
  const yellow = Array(5).fill(null).map(() => [])
  const green = Array(5).fill(null)

  guesses.forEach((guess) => {
    const currentWord = {}
    guess.forEach((l, i) => {
      l.cata({
        Grey: (letter) => {
          if (!has(letter, shape)) {
            shape[letter] = 0
          }
          if (!has(letter, grey)) {
            grey.push(letter)
          }
        },
        Yellow: (letter) => {
          if (typeof yellow[i] === 'undefined') {
            yellow[i] = []
          }
          if (!has(letter, yellow[i])) {
            yellow[i].push(letter)
          }
          currentWord[letter] = has(letter, currentWord) ? currentWord[letter] + 1 : 1
        },
        Green: (letter) => {
          green[i] = letter
          currentWord[letter] = has(letter, currentWord) ? currentWord[letter] + 1 : 1
        },
        White: () => {}
      })
      forEachObjIndexed((count, letter) => {
        if (has(shape, letter) && count > shape[letter]) {
          shape[letter] = count
        } else {
          shape[letter] = count
        }
      }, currentWord)
    })
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
