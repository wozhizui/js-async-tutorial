// 定义一个 thenable 对象
const thenable = {
  // 所谓 thenable 对象，就是具有 then 属性，而且属性值是如下格式函数的对象
  then: (resolve, reject) => {
    resolve(200)
  }
}

// thenable 对象可以转换为 Promise 对象
const promise = Promise.resolve(thenable)
promise.then(data => {
  // ...
  console.log(data)
})