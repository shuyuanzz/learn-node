const fs = require('fs');

function copy (src,dist) {
    const rs = fs.createReadStream(src);
    const ws = fs.createWriteStream(dist);
    rs.on('data',(chunk) => {
        if(ws.write(chunk) === false) {
            rs.pause()
        }
    })
    rs.on('end',() => {
        ws.end()
    })
    ws.on('drain',() => {
        rs.resume()
    })
}
const argv = process.argv;
copy(argv[0],argv[1]);