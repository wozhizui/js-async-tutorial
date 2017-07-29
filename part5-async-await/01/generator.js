const co = require('co')
const fs = require('fs')

function readFilePromise (filename) {
  return new Promise ((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if(err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

co(function* () {
  const r1 = yield readFilePromise('data/data1.json')
  console.log(r1)
  const r2 = yield readFilePromise('data/data2.json')
  console.log(r2)
})
