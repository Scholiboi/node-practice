const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    if(req.url === '/'){
        res.end('Welcome to the home page');
    }
    else if(req.url === '/about'){
        res.end(`
            <h1 style="color: blue">About Us</h1>
            <p>Welcome to our about page. We are glad to have you here.</p>
            <a href="/">Go back to home</a>
            `
        );
    }
    else{res.end(`
    <h1>Oops!</h1>
    <p>Looks like you have stumbled on the wrong side of the internet</p>
    <a href="/">Go back to home</a>    
    `
    );
    }
}
);

server.listen(5000);