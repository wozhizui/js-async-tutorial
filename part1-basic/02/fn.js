var t = Date.now()

for (var i = 0; i < 100000000; i++) {
  //
}

function fn() {
  console.log(Date.now() - t)  // 输出多少？？？
}
setTimeout(fn, 500)

// event loop理解