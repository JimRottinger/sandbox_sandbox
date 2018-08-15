const http = require('http');
const fileSystem = require('fs');
const path = require('path');

const hostname = 'localhost';
const host_port = 8000;
const client_port = 8001;

function serveAsset(rootPath, url, res) {
  // default root route to index.html in the folder
  if (url === '/') url = 'index.html';

  const filePath = path.join(__dirname, rootPath, url)

  const readStream = fileSystem.createReadStream(filePath)
    .on('error', function() {
      res.statusCode = 404;
      res.end();
    });

  if (/^.*\.js$/.test(url)) {
    res.setHeader('Content-Type', 'text/javascript');
  } else {
    res.setHeader('Content-Type', 'text/html');
  }

  readStream.pipe(res);
}

const host_server = http.createServer((req, res) => {
  serveAsset('host', req.url, res)
}).listen(host_port, hostname, () => {
  console.log(`Server running at http://${hostname}:${host_port}/`);
});;

const client_server = http.createServer((req, res) => {
  serveAsset('client', req.url, res)
}).listen(client_port, hostname, () => {
  console.log(`Client running at http://${hostname}:${client_port}/`);
});
