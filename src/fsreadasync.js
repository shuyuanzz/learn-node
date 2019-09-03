const fs = require('fs');

console.log('process start!');

fs.readFile('./src/test.md','utf8',(err,data) => {
    console.log('read file 1!');
    console.log('data:',data);
})

console.log('process continue!')

fs.readFile('./src/test2.md','utf8',(err,data) => {
    console.log('read file 2!');
    console.log('daya:',data);
})

console.log('process finish!');