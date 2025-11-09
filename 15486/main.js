// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const N = Number(input[0]);
// const arr = input.slice(1).map((str) => str.split(' ').map(Number));

const solve = (N, arr) => {
  const dp = new Array(N).fill(0);

  for (let i = N - 1; i >= 0; i--) {
    const [t, p] = arr[i];

    if (i + t > N) {
      dp[i] = 0;
    } else {
      if (i + t < N) {
        dp[i] = Math.max(dp[i + 1], p + dp[i + t]);
      } else {
        dp[i] = p;
      }
    }
  }

  return Math.max(...dp);
};

// console.log(solve(N, arr));

module.exports = { solve };
