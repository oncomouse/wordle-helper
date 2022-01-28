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
});
