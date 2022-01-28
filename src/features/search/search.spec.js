import search from './index';
import words from './words.json';

describe('Test searching for words', () => {
  test('It should match a word', () => {
    const matches = search(['aback', 'dries'], ['a', null, null, null, null], ['k'], ['e']);
    expect(matches).toStrictEqual(['aback']);
  });
  test('It should match against the full list', async () => {
    const matches = search(words, ['a', null, null, null, null], ['k'], ['e']);
    const results = ['aback', 'aflak', 'akron', 'alack', 'alkyd', 'alkyl', 'amuck', 'ankus'];
    expect(matches).toStrictEqual(results);
    const matches2 = search(words, [null, 'b', null, 'c', null], [], []);
    expect(matches2).toStrictEqual(['abaca', 'aback']);
    const matches3 = search(words, [null, null, null, null, null], ['e', 'v', 'r', 'y'], ['n']);
    const results3 = ['every', 'veery']; // Block nervy with the grey
    expect(matches3).toStrictEqual(results3);
  });
});
