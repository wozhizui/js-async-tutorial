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

function* Readfile () {
  const r1 = yield readFilePromise('data/data1.json')
  console.log(r1)  // 打印第 1 个文件内容
  const r2 = yield readFilePromise('data/data2.json')
  console.log(r2)  // 打印第 2 个文件内容
  const r3 = yield readFilePromise('data/data3.json')
  console.log(r3)  // 打印第 3 个文件内容
  const r4 = yield readFilePromise('data/data4.json')
  console.log(r4)  // 打印第 4 个文件内容
}

let readfile = Readfile()
readfile.next()
readfile.next()
readfile.next()
readfile.next()

未达到预期效果

// console.log(readfile.next())
// console.log(readfile.next())
// console.log(readfile.next())
// console.log(readfile.next())
// console.log(readfile.next())