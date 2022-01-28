import { taggedSum } from 'daggy';

const Color = taggedSum('Color', {
  Green: ['x'],
  Yellow: ['x'],
  Grey: ['x'],
  White: [],
});

Color.prototype.update = function () {
  return this.cata({
    Grey: (x) => Color.Yellow(x),
    Yellow: (x) => Color.Green(x),
    Green: (x) => Color.Grey(x),
    White: () => this,
  });
};

export default Color;
