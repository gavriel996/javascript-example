const sum = require('../sum');

test('adds 10 + 5 to equal 15', () => {
  expect(sum(10, 5)).toBe(15);
});