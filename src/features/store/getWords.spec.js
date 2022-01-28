import getWords from './getWords';
import store from './index';
import Color from '../../types/Color';

afterEach(() => {
  store.getState().resetState();
});
describe('Test getWords and its ability to make search queries', () => {
  test('It should match with an empty history', async () => {
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
    expect(await getWords(store.getState().guesses, store.getState().history)).toStrictEqual(results);
  });
  test('It should match with a full history', async () => {
    store.getState().guesses = [Color.Green('a'), Color.White, Color.White, Color.White, Color.White];
    store.getState().history = [[Color.Green('a'), Color.Yellow('k'), Color.White, Color.Grey('e'), Color.White]];
    const results = ['aback', 'aflak', 'akron', 'alack', 'alkyd', 'alkyl', 'amuck', 'ankus'];
    expect(await getWords(store.getState().guesses, store.getState().history)).toStrictEqual(results);
  });
});
