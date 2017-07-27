const fs = require('fs')

// 封装一个读取文件的promise对象
const readFilePromise = function (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err)  // 注意，这里执行 reject 是传递了参数，后面会有地方接收到这个参数
      } else {
        resolve(data.toString())  // 注意，这里执行 resolve 时传递了参数，then接收到了这个参数
      }
    })
  })
}

const result1 = readFilePromise('data/data1.json')
const result2 = readFilePromise('data/data2.json')

result2.then(data => {
  console.log('data2.json: ', data)
  return result1
}).then(data => {
  console.log('data1.json: ', data)
})

// 如果前面返回的是Promise对象，后面的then将会被当做这个返回的Promise的第一个then来对待