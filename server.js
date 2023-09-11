let http = require('http');

http.createServer(function(req,res){
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });     
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    }
    else if (req.url == "/hello") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>Hello NodeJS from thunsudamn.</p></body></html>');
        res.end();
    }
    else
        res.end('Invalid Request!');
}).listen(1234, () => console.log('Server running on localhost:1234...')) ;
