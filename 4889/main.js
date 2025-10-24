let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solve = (value) => {
  let unresolvedClosed = 0;
  let unresolvedOpened = 0;

  for(let i = 0; i< value.length; i++) {
    if(value[i] === '{') {
      unresolvedOpened += 1;
    } else if(value[i] === '}') {
      if(unresolvedOpened > 0) {
        unresolvedOpened -= 1;
      } else {
        unresolvedClosed += 1;
      }
    }
  }

  const actionForUnresolvedClosed = Math.floor(unresolvedClosed / 2);
  const leftForUnresolvedClosed = unresolvedClosed % 2;
  const actionForUnresolvedOpened = Math.floor(unresolvedOpened / 2);
  const leftForUnresolvedOpened = unresolvedOpened % 2;

  return actionForUnresolvedClosed + leftForUnresolvedClosed + actionForUnresolvedOpened + leftForUnresolvedOpened;
}

const func = (input) => {
  const removeTail = input.slice(0, input.length -1);

  removeTail.forEach((value, problemNumber) => {
    console.log(`${problemNumber + 1}. ${solve(value)}`);
  })
}

func(input);

module.exports = solve;
