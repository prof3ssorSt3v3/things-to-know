const { exec } = require('child_process');

//console.log(process.argv);
let args = process.argv;
args.splice(0, 2);
let message = args.join(' ');
console.log(message);

exec('git add .', (err, stdout, stdin) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('We have added');
});
exec(`git commit -m "${message}"`, (err, stdout, stdin) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('message applied');
});

exec('git push origin master', (err, stdout, stdin) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('done');
});
