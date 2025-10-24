const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);

const createFibonacci = (length) => {
  const result = [0, 1];

  if(length <= 2) {
    return result;
  }

  for(let i = 0; i <= length - 1; i++) {
    const {length: currentLength} = result;

    result.push(result[currentLength - 1] + result[currentLength - 2]);
  }

  return result;
}


const solve = (problem) => {
  if(problem === 0) {
    console.log(`1 0`)
  } else {
    const arr = createFibonacci(problem + 1);

    console.log(`${arr[problem - 1]} ${arr[problem]}`)
  }
}

for(let i = 1; i <= T; i++) {
  solve(Number(input[i]));
}
