const exec = require('child_process').execSync;
const moment = require('moment');

for (let i = 1; i < 366; i++) {
    exec(`touch test/File${i}.txt`)
    exec(`git add test/File${i}.txt`);
    exec(`git commit -m \"added file${i}\"`)
    let date = moment('01-01-2017', 'DD-MM-YYYY').add(i, 'days');
    exec(`git commit --amend --no-edit --date=\"${date}\"`);
}