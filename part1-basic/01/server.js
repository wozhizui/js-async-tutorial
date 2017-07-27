const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {
  if(req.url === '/favicon.ico') return
  if(req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('server.html').pipe(res)
  }
  if(req.url === '/data/data1.json') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    fs.createReadStream('data/data1.json').pipe(res)
  }
  console.log(req.url)
})

server.listen(3002, () => {
  console.log('run at http://localhost:3002')
})