function* G() {
  yield 100
}

const g = G()
// yield具有返回数据的功能，yield后面的数据被返回，存放到返回结果中的value属性中。
console.log(g.next())
