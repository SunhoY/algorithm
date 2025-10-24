import { solve } from './main';

it('2', () => {
  expect(solve(2)).toBe(1);
});

it('10', () => {
  expect(solve(10)).toBe(3);
});

it('11', () => {
  expect(solve(11)).toBe(4);
});

it('12', () => {
  expect(solve(12)).toBe(3);
});
