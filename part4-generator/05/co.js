const fs = require('fs')
const co = require('co')
const thunkify = require('thunkify')

// 定义generator
const readFileThunk = thunkify(fs.readFile)
const gen = function* () {
  const r1 = yield readFileThunk('data/data1.json', 'utf-8')
  console.log(r1)
  const r2 = yield readFileThunk('data/data2.json', 'utf-8')
  console.log(r2)
}

const c = co(gen) // 返回一个Promise对象
c.then(data => {
  console.log('结束')
})