import { taggedSum } from 'daggy';

const Color = taggedSum('Color', {
  Green: ['x'],
  Yellow: ['x'],
  Grey: ['x'],
  White: [],
});

Color.new = function (x) {
  return Color.Grey(x);
};

Color.prototype.update = function () {
  return this.cata({
    Grey: (x) => Color.Yellow(x),
    Yellow: (x) => Color.Green(x),
    Green: (x) => Color.Grey(x),
    White: () => this,
  });
};

export const propType = function (propValue, key, componentName, location, propFullName) {
  if (!Color.is(propValue[key])) {
    return new Error(
      'Invalid prop `' + propFullName + '` supplied to' + ' `' + componentName + '`. Validation failed.'
    );
  }
};

export default Color;
