import store from './index';
import Color from '../../types/Color';
import words from '../../../public/words.json';

afterEach(() => {
  store.getState().resetState();
});
beforeEach(() => {
  fetch.resetMocks();
});
describe('Testing Zustand state', () => {
  test('It should reset the state with resetState()', () => {
    store.getState().guesses.push('a');
    store.getState().guesses.push('b');
    store.getState().history.push('a');
    store.getState().history.push('b');
    store.getState().resetState();
    expect(store.getState().guesses).toEqual([]);
    expect(store.getState().history).toEqual([]);
  });
  test('It should update color with updateLetterColor()', () => {
    store.getState().guesses = [Color.Green('a'), Color.Grey('b'), Color.Yellow('c')];
    store.getState().updateLetterColor(1);
    expect(Color.Yellow.is(store.getState().guesses[1])).toBe(true);
    store.getState().updateLetterColor(2);
    expect(Color.Green.is(store.getState().guesses[2])).toBe(true);
    store.getState().updateLetterColor(0);
    expect(Color.Grey.is(store.getState().guesses[0])).toBe(true);
  });
  test('It should remove letters with deleteLetter()', () => {
    store.getState().guesses = [Color.Green('a'), Color.Grey('b'), Color.Yellow('c')];
    store.getState().deleteLetter();
    expect(store.getState().guesses.length).toBe(2);
    expect(Color.Green.is(store.getState().guesses[0])).toBe(true);
    expect(Color.Grey.is(store.getState().guesses[1])).toBe(true);
  });
  test('It should add a letter using addLetter() when there are fewer than 5 in guess', () => {
    store.getState().addLetter('a');
    expect(store.getState().guesses.length).toBe(1);
    expect(Color.Grey.is(store.getState().guesses[0])).toBe(true);
    expect(store.getState().guesses[0].x).toBe('a');
  });
  test('It should add a lowercase letter using addLetter() when there are fewer than 5 in guess', () => {
    store.getState().addLetter('A');
    expect(store.getState().guesses[0].x).toBe('a');
  });
  test('It should not add a letter using addLetter() when there are 5 in guess', () => {
    store.getState().addLetter('a');
    store.getState().addLetter('b');
    store.getState().addLetter('c');
    store.getState().addLetter('d');
    store.getState().addLetter('e');
    store.getState().updateLetterColor(4);
    store.getState().addLetter('a');
    expect(store.getState().guesses.length).toBe(5);
    expect(store.getState().guesses[4].x).toBe('e');
    expect(Color.Yellow.is(store.getState().guesses[4])).toBe(true);
  });
  test('It should add current guess to history and reset guest with newGuess()', () => {
    store.getState().addLetter('a');
    store.getState().addLetter('b');
    store.getState().addLetter('c');
    store.getState().newGuess();
    expect(store.getState().history.length).toBe(1);
    expect(store.getState().history[0].length).toBe(3);
    expect(store.getState().history[0][0].x).toBe('a');
    store.getState().addLetter('d');
    store.getState().addLetter('e');
    store.getState().newGuess();
    expect(store.getState().history.length).toBe(2);
    expect(store.getState().history[1].length).toBe(2);
    expect(store.getState().history[1][0].x).toBe('d');
  });
});
describe('Test getWords and its ability to make search queries', () => {
  test('It should match with an empty history', async () => {
    fetch.mockResponseOnce(JSON.stringify(words));
    store.getState().addLetter('e');
    store.getState().addLetter('y');
    store.getState().addLetter('v');
    store.getState().addLetter('r');
    store.getState().addLetter('n');
    store.getState().updateLetterColor(0);
    store.getState().updateLetterColor(1);
    store.getState().updateLetterColor(2);
    store.getState().updateLetterColor(3);
    const results = ['every', 'veery']; // Block nervy with the grey
    await store.getState().getWords();
    expect(store.getState().words).toStrictEqual(results);
  });
  test('It should update words based on existing word bank', async () => {
    fetch.mockResponseOnce(JSON.stringify(words));
    store.getState().guesses = [Color.Green('v'), Color.White, Color.White, Color.White, Color.White];
    store.getState().words = ['veery', 'every'];
    const results = ['veery'];
    await store.getState().getWords();
    expect(store.getState().words).toStrictEqual(results);
  });
});
