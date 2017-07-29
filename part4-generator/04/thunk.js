// 只有一个参数的函数，而且这个参数是一个callback函数，那这就是一个thunk函数

const fs = require('fs')

const thunk = function (filename, codetype) {
  // 返回一个只接受callback参数的函数
  return function (callback) {
    fs.readFile(filename, codetype, callback)
  }
}

const readFileThunk = thunk('data/data1.json', 'utf-8') // 执行后返回的是一个函数

readFileThunk((err, data) => {
  console.log(data) //打印文件内容
})