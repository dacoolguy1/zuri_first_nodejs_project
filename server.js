const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer(function(req, res) {
    console.log("Site is on " + req.url)
    if (req.url === '/index.html' || req.url === '/') {
        res.writeHead(200,{
            'Content-Type':'text/html'
        });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
        
    }
    else if (req.url === '/contactpage.html'){
        res.writeHead(200, {
            'Content-Type':'text/html'
        });
        fs.createReadStream(__dirname + '/contactpage.html').pipe(res);
    }
    else if (req.url === '/aboutpage.html'){
        res.writeHead(200, {
            'Content-Type':'text/html'
        });
        fs.createReadStream(__dirname + '/aboutpage.html').pipe(res);
    }
    else {
        res.writeHead(200, {
            'Content-Type':'text/html'
        });
        fs.createReadStream(__dirname + '/error.html').pipe(res);

    }
} );

//server.listen(port, hostname, () => {
  //  console.log(`The server is running succesfully at https://${hostname}:${port}/`);

//} );
server.listen(4000, "127.0.0.1");