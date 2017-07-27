const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  if(req.url === '/') {
    res.writeHead(200, {'Content-Type': 'html'})
    fs.createReadStream('index.html').pipe(res)
  }
})
.listen(3002, () => {
  console.log('run at http://localhost:3002')
})