$().ready(function () {
  console.log('jQuery ready!')
  $('#submit').click(function () {
    var ajax = $.ajax('/data/data1.json')
    
    // done和fail写法
    ajax.done(function (data) {
      console.log('success 1')
    })
    .fail(function () {
      console.log('error')
    })
    .done(function (data) {
      console.log('success 2')
    })

    // // then写法，和promise非常像了
    // ajax.then(function () {
    //   console.log('success 1')
    // }, function () {
    //   console.log('error 1')
    // })
    // .then(function () {
    //   console.log('success 2')
    // }, function () {
    //   console.log('error 2')
    // })

    // 打印出返回的ajax对象
    console.log(ajax) // 返回一个 deferred 对象
    // 并且注意到了是先打印ajax对象，在返回success1和success2的。
  })
})