const fs = require('fs')
const thunkify = require('thunkify')


const thunk = thunkify(fs.readFile)
const readFileThunk = thunk('data/data1.json', 'utf-8')

readFileThunk((err, data) => {
  console.log(data)
})