import {
  __,
  add,
  always,
  assoc,
  count,
  countBy,
  curry,
  equals,
  filter,
  forEach,
  forEachObjIndexed,
  gte,
  has,
  identity,
  ifElse,
  intersection,
  keys,
  lt,
  modify,
  nthArg,
  pipe,
  reduce,
  test as t,
  toLower,
  unless,
  where,
  without
} from 'ramda'

const mutate = curry((key, value, obj) => {
  obj[key] = value
})

const counts = countBy(toLower)

const search = (words, green, yellow, grey) => {
  const shapeFilter = RegExp(Array(green.length).fill(grey.length === 0 ? '' : `[^${grey.join('')}]`).map((x, i) => {
    const yellowLtr = yellow[i]
    if (yellowLtr !== null) {
      return x.replace(']', `${yellowLtr}]`)
    } else if (green[i] !== null) {
      return green[i]
    }
    return x
  }).join(''))

  const yellowCounts = pipe(
    filter(x => x !== null),
    counts
  )(yellow)
  const greyCounts = counts(grey)
  // Yellow filters for words:
  const yellowFilters = keys(yellowCounts).map((ltr) => {
    const ltrCount = yellowCounts[ltr]
    const countFunc = has(ltr, greyCounts) ? equals(ltrCount) : gte(ltrCount)

    return pipe(count(equals(ltr)), countFunc)
  })
  return words.filter((word) => {
    if (!t(shapeFilter, word)) {
      return false
    }
    return yellowFilters.length === 0 ? true : reduce((cur, acc) => !acc ? false : cur(word), true, yellowFilters)
  })

  // // Search for greens first:
  // const places = [] // Store the index of green letters, which we ignore below
  // // Build a regular expression based on green letters and also will `places`:
  // const wordFilter = RegExp(
  //   green
  //     .map((x, i) => {
  //       if (typeof x === 'string') {
  //         return x
  //       }
  //       places.push(i)
  //       return '.'
  //     })
  //     .join('')
  // )
  // // Filter the word list if we have any green letters:
  // const filteredWords = places.length !== green.length ? words.filter(t(wordFilter)) : words
  // // If there are no yellow and no grey letters, we can return:
  // if (yellow.length === 0 && grey.length === 0) {
  //   return filteredWords
  // }
  // // Which letters are both yellow and grey (which tell us exactly how many of a letter there are):
  // const yellowAndGrey = intersection(yellow, grey)
  // // Build a test object we can pass to where()
  // const test = {}
  // // Tests for yellow only letters:
  // pipe(
  //   without(yellowAndGrey),
  //   forEach((letter) => {
  //     const yellowCount = count(equals(letter), yellow)
  //     test[letter] = gte(__, yellowCount)
  //   })
  // )(yellow)
  // // Tests for grey only letters:
  // pipe(
  //   without(yellowAndGrey),
  //   forEach((letter) => {
  //     const greyCount = count(equals(letter), grey)
  //     test[letter] = lt(__, greyCount)
  //   })
  // )(grey)
  // // Tests for grey and yellow letters:
  // forEach((letter) => {
  //   const yellowCount = count(equals(letter), yellow)
  //   test[letter] = equals(yellowCount)
  // })(yellowAndGrey)

  // // Test each word against the test object:
  // return filteredWords.filter((word) => {
  //   // Remove the green letters from the word:
  //   const checkWord = word
  //     .split('')
  //     .filter((x, i) => places.indexOf(i) >= 0)
  //     .join('')
  //   // Count each remaining letter:
  //   const wordCount = countBy(identity, checkWord)
  //   return pipe(
  //     forEachObjIndexed(
  //       pipe(
  //         nthArg(1),
  //         unless(
  //           has(__, wordCount),
  //           mutate(__, 0, wordCount)
  //         )
  //       )
  //     ),
  //     where(__, wordCount)
  //   )(test)
  // })
}

export default search
