import {
  __,
  countBy,
  either,
  equals,
  filter,
  flatten,
  forEachObjIndexed,
  gte,
  has,
  identity,
  isNil,
  mapObjIndexed,
  pipe,
  test as t,
  where
} from 'ramda'

const search = (words, guesses) => {
  const shape = {}
  const grey = []
  const yellow = Array(5)
    .fill(null)
    .map(() => [])
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
            if (flatten(yellow).filter(equals(letter)).length > 0) {
              yellow[i].push(letter)
            } else {
              grey.push(letter)
            }
          }
        },
        Yellow: (letter) => {
          if (typeof yellow[i] === 'undefined') {
            yellow[i] = []
          }
          if (!has(letter, yellow[i])) {
            yellow[i].push(letter)
          }
          currentWord[letter] = has(letter, currentWord)
            ? currentWord[letter] + 1
            : 1
        },
        Green: (letter) => {
          green[i] = letter
          currentWord[letter] = has(letter, currentWord)
            ? currentWord[letter] + 1
            : 1
        },
        White: () => {}
      })
      // Update shape based on currentWord's count of yellows & greens
      forEachObjIndexed((count, letter) => {
        if (has(shape, letter) && count > shape[letter]) {
          shape[letter] = count
        } else {
          shape[letter] = count
        }
      }, currentWord)
    })
  })

  // Turn shape (which is a set of counts) into a filter object we can pass to R.where
  const shapeFilter = mapObjIndexed((count, letter) => {
    if (count === 0) {
      return either(equals(0), isNil)
    } else {
      if (grey.indexOf(letter) < 0) {
        return gte(__, count)
      } else {
        return equals(count)
      }
    }
  })(shape)
  const greyFilter = grey.join('')
  const wordFilter = RegExp(
    green
      .map((x, i) => {
        if (typeof x === 'string') {
          return x
        }
        if (yellow[i].length + grey.length === 0) {
          return '.'
        }
        return `[^${yellow[i].join('')}${greyFilter}]`
      })
      .join('')
  )
  return pipe(
    filter(pipe(countBy(identity), where(shapeFilter))),
    filter(t(wordFilter))
  )(words)
}

export default search
