import { left } from 'fp-ts/lib/Either';
import { both } from 'fp-ts/lib/These';
// import '@relmify/jest-fp-ts';

describe('Either or These Tests', () => {
  test('toBeLeft works', () => {
    expect(left(1)).toBeLeft();
  });
  test('toBeEither works', () => {
    expect(left(1)).toBeEither();
  });
});
describe('These Tests', () => {
  test('toBeThese works', () => {
    expect(both(1, 2)).toBeThese();
  });
  test('toBeBoth works', () => {
    expect(both(1, 2)).toBeThese();
  });
});
