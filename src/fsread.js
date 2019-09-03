const fs = require('fs');

const file = fs.readFileSync('./src/test.md', 'utf8');

console.log(file);