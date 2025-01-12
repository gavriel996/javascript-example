const visual_test = require('../visual_test');

test('test visual testing on a sample page', () => {
    expect(visual_test('https://localhost:3000/sample-page')).toBe(true);
  });