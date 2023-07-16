


const http = require('http');
 
const server = http.createServer(function (req, res) {
   const fs = require('fs');
 switch(true)
 {
    case req.url === '/' && req.method === 'GET':
      fs.readFile(__dirname + '/home.html', function (err, data) {
         res.setHeader('content-type', 'text/html; charset=utf-8');
         res.writeHead(200);
         res.end(data);
      })
    break;
    case req.url === '/bejelentkezes' && req.method === 'GET':
      fs.readFile(__dirname + '/login.html', function (err, data) {
         res.setHeader('content-type', 'text/html; charset=utf-8');
         res.writeHead(200);
         res.end(data);
      })
        break;
    default:
    fs.readFile(__dirname + '/404.html', function (err, data) {
    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.writeHead(200);
    res.end(data);
    })
 } 
    //console.log(req.url);
    //console.log(req.method);
  });
server.listen(8080);