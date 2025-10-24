const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const problem = Number(input);

const result = new Array(Math.pow(10, 6));
result[0] = 0;
result[1] = 0;

const solve = (n) => {
  if (n === 1) {
    return result[n];
  }

  if (result[n]) {
    return result[n];
  }

  const candidates = new Set();

  if (n % 3 === 0) {
    candidates.add(n / 3);
  }

  if (n % 2 === 0) {
    candidates.add(n / 2);
  }

  candidates.add(n - 1);

  const min = Math.min(...[...candidates].map(solve));
  result[n] = min + 1;

  return result[n];
};

console.log(solve(problem));

// module.exports = {solve};
