const Q = require('q')
const fs = require('fs')
const co = require('co')

const readFilePromise = Q.denodeify(fs.readFile)
const gen = function* () {
  const r1 = yield readFilePromise('data/data1.json', 'utf-8')
  console.log(r1)
  const r2 = yield readFilePromise('data/data2.json', 'utf-8')
  console.log(r2)
  
}

const c = co(gen)
c.then(data => {
  console.log('结束')
})