const Q = require('q')
const fs = require('fs')

// Q.defer算是一个比较偏底层一点的 API ，用于自己定义一个promise生成器
function readFile(fileName) {
  const defer = Q.defer()
  fs.readFile(fileName, (err, data) => {
    if (err) {
      defer.reject(err)
    } else {
      defer.resolve(data.toString())
    }
  })
  return defer.promise
}
readFile('data/data1.json')
.then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err.stack)
})