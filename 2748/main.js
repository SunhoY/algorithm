const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const fibonacci = (n) => {
  const arr = [BigInt(0), BigInt(1)];

  for (let i = 2; i <= n; ++i) {
    arr.push(BigInt(arr[arr.length - 1]) + BigInt(arr[arr.length - 2]));
  }

  return arr;
}

const solve = (n) => {
  const arr = fibonacci(n);
  return arr[n];
}

const given = Number(input);

console.log(solve(given).toString());

// module.exports = solve;
