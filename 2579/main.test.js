import { solve } from './main';

it('test1', () => {
  expect(solve([10, 20, 15, 25, 10, 20])).toBe(75);
});

it('test2', () => {
  expect(solve([20, 15, 10, 5, 20, 40, 10, 15])).toEqual(105);
});

it('test3', () => {
  expect(solve([10])).toEqual(10);
});

it('test4', () => {
  expect(solve([10, 20, 30])).toEqual(50);
});

it('test5', () => {
  expect(solve([20, 20, 10, 20, 20, 10, 20, 20])).toEqual(120);
});

it('test6', () => {
  expect(solve([100, 100, 1, 100, 100, 1])).toEqual(301);
});

it('test7', () => {
  expect(solve([14, 17, 24, 8, 4, 35, 10])).toEqual(91);
});
