const http = require('http');

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.sendStatus(200);
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
  });
});

// TO DO: Add tests
