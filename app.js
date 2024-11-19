const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Welcome to our home page');
    console.log("Request received");
});

server.listen(5000, () => {
    console.log("Server listening on port 5000...");
});

console.log("Server created");