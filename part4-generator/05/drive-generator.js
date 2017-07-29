const fs = require('fs')
const thunkify = require('thunkify')

// 自动驱动流程管理的函数
function run (generator) {
  const g = generator()
  function next (err, data) {
    const result = g.next(data) // 返回 { value: thunk函数, done: ... }
    if (result.done) {
      return // 结束的话，就返回
    }
    result.value(next)
    // value是一个thunk函数
    // result.value是一个thunk函数，需要接受一个callback函数作为参数传递进去
    // 正好把next给传递进去，让next一直被执行下去
  }
  next() // 手动执行启动第一次next
}

// 定义Generator
const readFileThunk = thunkify(fs.readFile)
const gen = function* () {
  const r1 = yield readFileThunk('data/data1.json', 'utf-8')
  console.log(r1)
  const r2 = yield readFileThunk('data/data2.json', 'utf-8')
  console.log(r2)
}

// 启动执行
run(gen)