const http = require('http');

const hostname = 'localhost';
const host_port = 8000;
const client_port = 8001;

const host_server = http.createServer((req, res) => {
  debugger
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

const client_server = http.createServer((req, res) => {
  console.log(req)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Client\n');
});

host_server.listen(host_port, hostname, () => {
  console.log(`Server running at http://${hostname}:${host_port}/`);
});

client_server.listen(client_port, hostname, () => {
  console.log(`Client running at http://${hostname}:${client_port}/`);
});
