function App() {
  const http = require('http');

  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); 
    res.end('Hello, this is your basic API!\n'); 
  });

  server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
  });
}

export default App;
