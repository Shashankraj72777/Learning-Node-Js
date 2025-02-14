console.log(global);

setTimeout(() => {
    console.log("it is timeout");
    clearInterval(int);
}, 3000);

const int = setInterval(() =>{
    console.log("it the interval");
}, 2000);

console.log(__dirname);  
console.log(__filename); 
