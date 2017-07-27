var i, t = Date.now()
for (i = 0; i < 1000000000; i++) {
}
console.log(Date.now() - t) //node v8.0.0 1054ms