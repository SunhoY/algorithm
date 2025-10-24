import {solve} from './main';

it('0 0 13 40 0 37', () => {
  expect(solve([0,0,13,40,0,37])).toEqual(2);
});

it('0 0 3 0 7 4', () => {
  expect(solve([0,0,3,0,7,4])).toEqual(1);
});

// 포함
it('1 1 1 1 1 5', () => {
  expect(solve([1,1,1,1,1,5])).toEqual(0)
})

it('0 0 2 1 0 1', () => {
  expect(solve([0,0,2,1,0,1])).toEqual(1);
})

it('1 0 1 0 0 2', () => {
  expect(solve([1,0,1,0,0,2])).toEqual(1);
})

it('0 0 1 3 3 1', () => {
  expect(solve([0,0,1,3,3,1])).toEqual(0);
})

it('0 0 1 0 0 1', () => {
  expect(solve([0,0,1,0,0,1])).toEqual(-1)
})

it('0 0 10 1 0 1', () => {
  expect(solve([0,0,10,1,0,1])).toEqual(0)
})

it('-1 -1 3 4 4 5', () => {
  expect(solve([-1,-1,3,4,4,5])).toEqual(2)
})

it('0 0 1 2 0 1', () => {
  expect(solve([0,0,1,2,0,1])).toEqual(1)
});

it('0 0 5 0 0 2', () => {
  expect(solve([0,0,5,0,0,2])).toEqual(0)
});

