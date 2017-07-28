const fs = require('fs')
const Q = require('q')

const result = Q.nfcall(fs.readFile, 'data/data1.json', 'utf-8')

result.delay(5000).then(data => {
  console.log(data.toString())
}).catch(err => {
  console.log(err.stack)
})

// 基础操作的意思