const wait = () => {
  // 定义promise对象
  const promise = new Promise((resolve, reject) => {
    const task = () => {
      console.log('执行完成')
      resolve() // callback执行resolve或reject
      // reject()
    }
    setTimeout(task, 2000)
  })
  return promise //返回promise对象
}

const w = wait()
w.then(() => {
  console.log('ok 1')
}, () => {
  console.log('err 1')
})
.then(() => {
  console.log('ok 2')
}, () => {
  console.log('err 2')
})