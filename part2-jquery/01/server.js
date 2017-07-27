const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {
  // js文件服务
  if(req.url.substr(-3) === '.js') {
    let filepath = req.url;
    res.writeHead(200, { 'Content-Type': 'application/x-javascript' })
    fs.createReadStream(filepath.substr(1)).pipe(res)
  }
  // 图标文件
  if(req.url === '/favicon.ico') {
    res.writeHead(200, { 'Content-Type': 'image/x-icon' })
    fs.createReadStream('favicon.ico').pipe(res)
  }
  // index.html主页服务
  if(req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('index.html').pipe(res)
  }
  // 数据ajax服务
  if(req.url === '/data/data1.json') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    fs.createReadStream('data/data1.json').pipe(res)
  }
  console.log(req.url)
})

server.listen(3002, () => {
  console.log('run at http://localhost:3002')
})