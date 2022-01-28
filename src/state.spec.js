import state from './state';
import Color from './types/Color';

afterEach(() => {
  state.getState().resetState();
});
describe('Testing Zustand state', () => {
  test('It should reset the state with resetState()', () => {
    state.getState().guesses.push('a');
    state.getState().guesses.push('b');
    state.getState().history.push('a');
    state.getState().history.push('b');
    state.getState().resetState();
    expect(state.getState().guesses).toEqual([]);
    expect(state.getState().history).toEqual([]);
  });
  test('It should update color with updateLetterColor()', () => {
    state.getState().guesses = [Color.Green('a'), Color.Grey('b'), Color.Yellow('c')];
    state.getState().updateLetterColor(1);
    expect(Color.Yellow.is(state.getState().guesses[1])).toBe(true);
    state.getState().updateLetterColor(2);
    expect(Color.Green.is(state.getState().guesses[2])).toBe(true);
    state.getState().updateLetterColor(0);
    expect(Color.Grey.is(state.getState().guesses[0])).toBe(true);
  });
  test('It should remove letters with deleteLetter()', () => {
    state.getState().guesses = [Color.Green('a'), Color.Grey('b'), Color.Yellow('c')];
    state.getState().deleteLetter();
    expect(state.getState().guesses.length).toBe(2);
    expect(Color.Green.is(state.getState().guesses[0])).toBe(true);
    expect(Color.Grey.is(state.getState().guesses[1])).toBe(true);
  });
  test('It should add a letter using addLetter() when there are fewer than 5 in guess', () => {
    state.getState().addLetter('a');
    expect(state.getState().guesses.length).toBe(1);
    expect(Color.Grey.is(state.getState().guesses[0])).toBe(true);
    expect(state.getState().guesses[0].x).toBe('a');
  });
  test('It should add a lowercase letter using addLetter() when there are fewer than 5 in guess', () => {
    state.getState().addLetter('A');
    expect(state.getState().guesses[0].x).toBe('a');
  });
  test('It should not add a letter using addLetter() when there are 5 in guess', () => {
    state.getState().addLetter('a');
    state.getState().addLetter('b');
    state.getState().addLetter('c');
    state.getState().addLetter('d');
    state.getState().addLetter('e');
    state.getState().updateLetterColor(4);
    state.getState().addLetter('a');
    expect(state.getState().guesses.length).toBe(5);
    expect(state.getState().guesses[4].x).toBe('e');
    expect(Color.Yellow.is(state.getState().guesses[4])).toBe(true);
  });
  test('It should add current guess to history and reset guest with newGuess()', () => {
    state.getState().addLetter('a');
    state.getState().addLetter('b');
    state.getState().addLetter('c');
    state.getState().newGuess();
    expect(state.getState().history.length).toBe(1);
    expect(state.getState().history[0].length).toBe(3);
    expect(state.getState().history[0][0].x).toBe('a');
    state.getState().addLetter('d');
    state.getState().addLetter('e');
    state.getState().newGuess();
    expect(state.getState().history.length).toBe(2);
    expect(state.getState().history[1].length).toBe(2);
    expect(state.getState().history[1][0].x).toBe('d');
  });
});
