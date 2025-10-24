const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cases = Number(input[0]);

const solve = (given) => {
  const [a] = given;
  const normalized = given.map((v) => v - a);
  const [start, end] = normalized;

  const sqrtEnd = Math.sqrt(end);
  const n = Math.floor(sqrtEnd);

  if (n === sqrtEnd) {
    return 2 * n - 1;
  }
  if (end > Math.pow(n, 2) && end <= n * (n + 1)) {
    return 2 * n;
  }

  return 2 * n + 1;
};

for (let i = 1; i <= cases; i++) {
  const problem = input[i].split(' ').map(Number);

  const count = solve(problem);

  console.log(count);
}

// module.exports = solve;
