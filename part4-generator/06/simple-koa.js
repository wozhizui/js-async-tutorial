const Koa = require('koa')

let app = new Koa()

app.use(function* (next) {
  this.body = '1'
  yield next;
  this.body += '5'
  console.log(this.body)
})
app.use(function* (next) {
  this.body += '2'
  yield next
  this.body += '4'
})
app.use(function* (next) {
  this.body += '3'
})

app.listen(3000, () => {
  console.log('run at http://localhost:3000')
})