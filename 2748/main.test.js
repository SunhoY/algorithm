import solve from "./main";

it('3', () => {
  expect(solve(3)).toBe(2);
});

it('1', () => {
  expect(solve(1)).toBe(1);
});

it('0', () => {
  expect(solve(0)).toBe(0);
});

it('17', () => {
  expect(solve(17)).toBe(1597);
})
