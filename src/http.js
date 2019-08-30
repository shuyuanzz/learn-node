const http = require('http');
const data = {
    name:'node demo',
    date:new Date().getDate(),
    value:520
}
http.createServer((req,res) => {
   res.setHeader('Content-Type', 'application/json;charset=utf-8');
   const result = JSON.stringify(data);
   res.end(result);
}).listen(8080,() => {
    console.log('Listened in port 8080')
})