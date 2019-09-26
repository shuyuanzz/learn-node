const fs = require('fs');
console.log('process begain!');

const data = "write data";
fs.writeFile('./src/test3.md',data,(err) => {
    if(err) return err;
    console.log('file has been writed!')
}); 

console.log('process finish!')