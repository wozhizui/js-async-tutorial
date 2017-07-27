$().ready(function () {
  console.log('jQuery ready!')
  $('#submit').click(function () {
    // deferred对象转换成 ES6 的Promise对象
    // Promise.resolve能够将thenable对象转换为Promise对象
    var jsPromise = Promise.resolve($.ajax('/data/data1.json'))
    
    jsPromise.then(data => {
      console.log('success 1')
      console.log(data)
    })
  })
})