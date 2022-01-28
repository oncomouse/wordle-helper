const search = (words, green, yellow, grey) => {
  const noMatchWildCard = grey.length > 0 ? `[^${grey.join(',')}]` : '.';
  const pattern = RegExp(
    Array(green.length)
      .fill(null)
      .map((_, i) => {
        if (typeof green[i] === 'string') {
          return green[i];
        }
        return noMatchWildCard;
      })
      .join('')
  );

  return words.filter((x) => {
    return x.match(pattern) !== null && yellow.reduce((acc, cur) => (acc ? x.indexOf(cur) >= 0 : false), true);
  });
};

export default search;
