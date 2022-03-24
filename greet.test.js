const { name } = require('ejs');
const greet = require('./greet');

describe('test greet()', () => {
  test('name = Elizabeth', () => {
    // const result = 'Hello, Elizabeth';
    expect(greet('Elizabeth')).toMatch('Elizabeth');
  });

  test('name is null', () => {
    // const name = null;
    expect(greet(null)).toMatch('Hello there!');
  });
});
