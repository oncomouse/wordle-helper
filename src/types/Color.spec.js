import Color from './Color';

describe('Testing Color', () => {
  test('Colors should ID as themselves', () => {
    const a = Color.Green('a');
    expect(Color.Green.is(a)).toBe(true);
  });
  test('Colors.x should return the letter being stored', () => {
    const a = Color.Yellow('a');
    expect(a.x).toBe('a');
  });
  test('Color.new should return a Grey', () => {
    expect(Color.Grey.is(Color.new('a'))).toBe(true);
  });
  test('Color.White should not update', () => {
    const a = Color.White;
    expect(Color.White.is(Color.White.update(a))).toBe(true);
  });
});
