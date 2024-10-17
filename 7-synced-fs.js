const {writeFileSync, readFileSync} = require('fs');

const first = readFileSync('./content/random1.txt', 'utf8');
const second = readFileSync('./content/random2.txt', 'utf8');

console.log(first, second);

// Yooo, you have accessed file 1 Yoo you have accessed file 2

writeFileSync('./content/random3.txt', `Here is the result: ${first}, ${second}`, {flag: 'w'});

//w is for write, a is for append, r is for read