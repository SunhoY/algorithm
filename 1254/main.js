let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const reverse = input.split('').reverse().join('');

const check = (straight, reverse, start) => {
  for(let i = 0, j = start+i; j < straight.length; i++, j++) {
    if(straight[j] !== reverse[i]) {
      return false;
    }
  }

  return true;
}

for(let i = 0; i < input.length; i++) {
  if(check(input, reverse, i)) {
    console.log(i + input.length);
    return;
  }
}
