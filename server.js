import http from 'http';
const PORT = 9000;

const server = http.createServer((req, res) => {
    // res.setHeader("Content-Type", 'text/html');
    // res.end('<h1>Hello, Its me Shashank</h1>');

console.log(req.url);
console.log(req.method);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h2>Hello,I am Shashank Raj</h2>');
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
