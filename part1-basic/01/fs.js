var fs = require('fs')
fs.readFile('data/data1.json', (err, data) => {
    console.log(data.toString())
})