const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [cases, ...rest] = input;

const T = Number(cases);
const stairs = rest.map(Number);

const getSolution = (solutions, nth, stairs) => {
  if (nth === solutions.length - 1) {
    solutions[nth] = [stairs[nth], stairs[nth]];

    return solutions;
  } else {
    let byOneStep = 0;

    if (solutions[nth + 2] && solutions[nth + 2][1] > 0) {
      byOneStep = solutions[nth + 2][1] + stairs[nth];
    } else {
      byOneStep = -1;
    }

    const byTwoStep =
      Math.max(solutions[nth + 1][0], solutions[nth + 2]?.[1] ?? -1) +
      stairs[nth];

    solutions[nth] = [byOneStep, byTwoStep];

    return solutions;
  }
};

const solve = (stairs) => {
  let solutions = new Array(stairs.length);

  for (let i = stairs.length - 1; i >= 0; i--) {
    solutions = getSolution(solutions, i, stairs);
  }

  return Math.max(...solutions[0], ...(solutions[1] ?? [-1, -1]));
};

console.log(solve(stairs));

// module.exports = { solve };
