const fs = require('fs')
const Q = require('q')

const readFilePromise = Q.denodeify(fs.readFile)