const {exec} = require('child_process');

const {argv} = process;

const problem = argv[2];

const cmd = `node ./${problem}/main.js < ./${problem}/input.txt`;

exec(cmd, (err, stdout, stderr) => {
  if(err) {
    console.error(err);
    return;
  }

  if(stderr) {
    console.error(stderr);
  }

  console.log(stdout)
})


