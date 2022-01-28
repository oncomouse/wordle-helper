import { prepend } from 'ramda';
import search from '../search';
import words from '../search/words.json';

const getWordList = async () => words;

const getWords = async (guesses, history) => {
  const green = Array(guesses.length).fill(null);
  const yellow = [];
  const grey = [];
  prepend(guesses, history).forEach((guess) => {
    guess.forEach((letter, i) => {
      letter.cata({
        Grey: (x) => {
          if (grey.indexOf(x) < 0) grey.push(x);
        },
        Yellow: (x) => {
          if (yellow.indexOf(x) < 0) yellow.push(x);
        },
        Green: (x) => {
          green[i] = x;
        },
        White: () => {},
      });
    });
  });
  return search(await getWordList(), green, yellow, grey);
};

export default getWords;
