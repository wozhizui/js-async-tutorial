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

// Promise.all 接收一个包含多个 promise 对象的数组
Promise.all([result1, result2]).then(datas => {
  // 接收到的 datas 是一个数组，依次包含了多个 promise 返回的内容
  console.log(datas[0])
  console.log(datas[1])
})

// Promise.race 接收一个包含多个 promise 对象的数组
Promise.race([result1, result2]).then(data => {
    // data 即最先执行完成的 promise 的返回值
    console.log(data)
})