const fs = require('fs')

// 将readFile包装成Promise对象
const readFilePromise = function (filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data.toString())
      }
    })
  })
}

readFilePromise('data/data1.json').then(data => {
  console.log(data)
  return readFilePromise('data/data2.json')
}).then(data => {
  console.log(data)
  return readFilePromise('data/data3.json')
}).then(data => {
  console.log(data)
  return readFilePromise('data/data4.json')
}).then(data => {
  console.log(data)
})