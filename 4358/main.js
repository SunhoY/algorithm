var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const {length} = input;

const result = {};

for(let i = 0; i < input.length; i++) {
  const hit = result[input[i]];

  if(hit) {
    result[input[i]] = hit+1;
  } else {
    result[input[i]] = 1;
  }
}

const entries = Object.entries(result).sort((a, b) => a[0] < b[0] ? -1:1);

entries.forEach(([key, value]) => {
  const percentage = Math.round((value / length * 1000000)) / 10000;

  console.log(`${key} ${percentage.toFixed(4)}`);
})
