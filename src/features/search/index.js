import * as R from 'ramda';

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
  const filteredWords = places.length !== green.length ? words.filter(R.test(wordFilter)) : words;
  if (yellow.length > 0 || grey.length > 0) {
    const yellowAndGrey = [];
    const yellowCount = R.countBy(R.identity, yellow);
    const greyCount = R.countBy(
      R.pipe(
        R.tap((letter) => {
          if (yellow.indexOf(letter) >= 0) {
            yellowAndGrey.push(letter);
          }
        }),
        R.identity
      ),
      grey
    );
    return filteredWords.filter((word) => {
      const checkWord = word
        .split('')
        .filter((x, i) => places.indexOf(i) >= 0)
        .join('');
      const wordCount = R.countBy(R.identity, checkWord);
      const yellowMatch = R.pipe(
        R.keys,
        R.without(yellowAndGrey),
        R.reduce((_, letter) => {
          const count = wordCount[letter] || 0;
          if (count < yellowCount[letter]) {
            return R.reduced(false);
          }
          return true;
        }, true)
      )(yellowCount);
      const greyMatch = R.pipe(
        R.keys,
        R.without(yellowAndGrey),
        R.reduce((_, letter) => {
          const count = wordCount[letter] || 0;
          if (count >= greyCount[letter]) {
            return R.reduced(false);
          }
          return true;
        }, true)
      )(greyCount);
      const yellowAndGreyMatch = R.reduce((_, letter) => {
        const count = wordCount[letter] || 0;
        if (count - yellowCount[letter] > greyCount[letter]) {
          return R.reduced(false);
        }
        return true;
      }, true)(yellowAndGrey);
      return yellowMatch && greyMatch && yellowAndGreyMatch;
    });
  }
  return filteredWords;
};

export default search;
