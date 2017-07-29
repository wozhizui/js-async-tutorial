const fs = require('fs')
const thunkify = require('thunkify')

const readFileThunk = thunkify(fs.readFile)

const gen = function* () {
  const r1 = yield readFileThunk('data/data1.json', 'utf-8')
  console.log(r1)
  const r2 = yield readFileThunk('data/data2.json', 'utf-8')
  console.log(r2)
}

const g = gen()
// console.log(g.next()) // { value: [Function], done: false }

g.next().value((err, data1) => {
  // 这里的 data1 获取的就是第一个文件的内容。下一行中，g.next(data1) 可以将数据传递给上面的 r1 变量，此前已经讲过这种参数传递的形式
  // 下一行中，g.next(data1).value 又是一个 thunk 函数，它又需要一个 callback 函数作为参数传递进去
  g.next(data1).value((err, data2) => {
    // 这里的data2获取的是第二个文件的内容
    g.next(data2)
  })
})