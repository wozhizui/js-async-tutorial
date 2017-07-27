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

const result = readFilePromise('data/data2.json')
result.then((data) => {
  console.log(data)
  return JSON.parse(data).a //这一步返回的值，会传入下一步
})
.then((a) => {
  console.log(a)
})
.catch((err) => {
  console.log(err) //这里的 catch 就能捕获 readFilePromise 中触发的 reject ，而且能接收 reject 传递的参数
})
