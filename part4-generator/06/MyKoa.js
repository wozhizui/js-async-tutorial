const co = require('co')

class MyKoa extends Object {
  constructor(props) {
    super(props)

    // 存储所有中间件
    this.middlewares = []
  }

  // 注入中间件
  use (generator) {
    this.middlewares.push(generator)
  }

  // 执行中间件
  listen () {
    this._run()
  }

  _run () {
    const ctx = this
    const middlewares = ctx.middlewares
    co(function* () {
      let prev = null
      let i = middlewares.length
      //从最后一个中间件到第一个中间件的顺序开始遍历
      while (i--) {
        // ctx 作为函数执行时的 this 才能保证多个中间件中数据的共享
        //prev 将前面一个中间件传递给当前中间件，才使得中间件里面的 next 指向下一个中间件
        prev = middlewares[i].call(ctx, prev)
      }
      // 执行第一个中间件
      yield prev
    })
  }
}

module.exports = MyKoa