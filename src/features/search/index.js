import {
  __,
  count,
  countBy,
  equals,
  forEach,
  gte,
  has,
  identity,
  intersection,
  keys,
  lt,
  pipe,
  test as t,
  where,
  without,
} from 'ramda';

const search = (words, green, yellow, grey) => {
  // Search for greens first:
  const places = [];
  const wordFilter = RegExp(
    green
      .map((x, i) => {
        if (typeof x === 'string') {
          return x;
        }
        places.push(i);
        return '.';
      })
      .join('')
  );
  const filteredWords = places.length !== green.length ? words.filter(t(wordFilter)) : words;
  if (yellow.length === 0 && grey.length === 0) {
    return filteredWords;
  }
  const yellowAndGrey = intersection(yellow, grey);
  // Build a test object we can pass to where()
  const test = {};
  pipe(
    without(yellowAndGrey),
    forEach((letter) => {
      const yellowCount = count(equals(letter), yellow);
      test[letter] = gte(__, yellowCount);
    })
  )(yellow);
  pipe(
    without(yellowAndGrey),
    forEach((letter) => {
      const greyCount = count(equals(letter), grey);
      test[letter] = lt(__, greyCount);
    })
  )(grey);
  forEach((letter) => {
    const yellowCount = count(equals(letter), yellow);
    test[letter] = equals(yellowCount);
  })(yellowAndGrey);

  // Test each word against the test object:
  return filteredWords.filter((word) => {
    const checkWord = word
      .split('')
      .filter((x, i) => places.indexOf(i) >= 0)
      .join('');
    const wordCount = countBy(identity, checkWord);
    pipe(
      keys,
      forEach((letter) => {
        if (!has(letter, wordCount)) {
          wordCount[letter] = 0;
        }
      })
    )(test);
    return where(test, wordCount);
  });
};

export default search;
