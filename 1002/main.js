let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solve = (given) => {
  const [x1, y1, r1, x2, y2, r2] = given;

  const deltaX = x2 - x1;
  const deltaY = y2 - y1;

  const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

  // 겹침
  if(x1 === x2 && y1 === y2 && r1 === r2) return -1;

  // 포함(안겹침) 또는 분리(안겹침)
  if(distance < Math.abs(r1 - r2) || distance > r1 + r2) {
    return 0;
  }

  // 외접 또는 내접
  if(distance === r1+r2 || distance === Math.abs(r1-r2)){
    return 1;
  }

  return 2;
}

const numberOfProblem = Number(input[0]);

for(let i = 1; i <= numberOfProblem; i++) {
  const problem = input[i].split(' ').map(Number);

  console.log(solve(problem));
}

module.exports = {solve};
