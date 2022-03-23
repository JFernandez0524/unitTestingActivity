const greet = require('./greet');

describe('test greet()', () => {
  it('Should be called', () => {
    // const result = 'Hello, Elizabeth';
    expect(greet('Elizabeth')).toBe('Hello, Elizabeth');
  });
});
