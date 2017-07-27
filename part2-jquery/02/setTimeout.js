var wait = function () {
  var task = function () {
    console.log('执行完成')
  }
  setTimeout(task, 2000)
}
wait()