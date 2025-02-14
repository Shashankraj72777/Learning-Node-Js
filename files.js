const fs = require('fs');   // fs is filesystem

// read files
fs.readFile('./Docs/blog1.txt', (err, data) => {
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');

// write files
fs.writeFile('./Docs/blog1.txt', 'hello world', () => {
    console.log("file was written");
});

// directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('folder created');
    });
} else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log('folder deleted');
    })
}


// delete files
if (fs.existsSync('./Docs/deleteme.txt')){
    fs.unlink('./Docs/deleteme.txt', (err) =>{
        if(err){
            console.log(err)
        }
        console.log('files deleted');
    })
}