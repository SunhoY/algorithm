import {solve} from './main'

it('}}}{', () => {
  expect(solve('}}}{')).toEqual(3)
});

it('}{', () => {
  expect(solve('}{')).toEqual(2)
})

it('{{{}', () => {
  expect(solve('{{{}')).toEqual(1);
})

it('{}{}{}', () => {
  expect(solve('{}{}{}')).toEqual(0);
})
