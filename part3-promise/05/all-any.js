const fs = require('fs')
const Q = require('q')

const r1 = Q.nfcall(fs.readFile, 'data/data1.json', 'utf-8')
const r2 = Q.nfcall(fs.readFile, 'data/data2.json', 'utf-8')

Q.all([r1, r2]).then(arr => {
  console.log(arr)
}).catch(err => {
  console.log(err)
})

// 对应Promise.all和Promise.race