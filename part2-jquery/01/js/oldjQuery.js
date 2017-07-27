$().ready(function () {
  console.log('jQuery ready!')
  $('#submit').click(function () {
    var ajax = $.ajax({
      url: '/data/data1.json',
      success: function () {
        console.log('success!')
      },
      error: function () {
        console.log('error')
      }
    })
    console.log(ajax)
  })
})