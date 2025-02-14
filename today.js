const fs = require('fs');

const readStream = fs.createReadStream('./Docs/blog2.txt');

readStream.on('data', (chunk) => {
    console.log('---------NEW CHUNK-------');
    console.log(chunk.toString());
});