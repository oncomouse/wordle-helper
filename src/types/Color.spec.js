import Color from './Color';

describe('Testing Color', () => {
  test('Colors should ID as themselves', () => {
    const a = Color.Green('a');
    expect(Color.Green.is(a)).toEqual(true);
  });
  test('Color.White should not update', () => {
    const a = Color.White;
    expect(Color.White.is(Color.White.update(a))).toBe(true);
  });
});
