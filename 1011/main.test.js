import solve from "./main";
it('0 1', () => {
  expect(solve([0, 1])).toEqual(1);
});

it('0 2', () => {
  expect(solve([0, 2])).toEqual(2);
})

it('0 3', () => {
  expect(solve([0, 3])).toEqual(3);
});

it('0 4', () => {
  expect(solve([0, 4])).toEqual(3);
});

it('0 5', () => {
  expect(solve([0, 5])).toEqual(4);
})

it('0 6', () => {
  expect(solve([0, 6])).toEqual(4);
})

it('0 7', () => {
  expect(solve([0, 7])).toEqual(5);
})

it('0 8', () => {
  expect(solve([0, 8])).toEqual(5);
})

it('0 9', () => {
  expect(solve([0, 9])).toEqual(5);
})

it('0 10', () => {
  expect(solve([0, 10])).toEqual(6);
})

it('0 11', () => {
  expect(solve([0, 11])).toEqual(6);
})

it('0 12', () => {
  expect(solve([0, 12])).toEqual(6);
})

it('0 13', () => {
  expect(solve([0, 13])).toEqual(7);
})

it('0 max', () => {
  expect(solve([0, Math.pow(2, 31)])).toEqual(8);
})

