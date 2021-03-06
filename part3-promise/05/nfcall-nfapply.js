const Q = require('q')
const fs = require('fs')

const result1 = Q.nfcall(fs.readFile, 'data/data1.json', 'utf-8')  // 使用 Q.nfcall 返回一个 promise
result1.then(data => {
  console.log(data)
}).catch(err => {
  console.log(err.stack)
})

const result2 = Q.nfapply(fs.readFile, ['data/data1.json', 'utf-8'])  // 使用 Q.nfapply 返回一个 promise
result2.then(data => {
    console.log(data)
}).catch(err => {
    console.log(err.stack)
})