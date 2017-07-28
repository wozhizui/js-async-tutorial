function* Hello () {
  yield 100
  yield (function () {return 200})()
  yield 300
}

const h = Hello()
console.log(h[Symbol.iterator]) //得到一个iterator对象

// console.log(h.next())
// console.log(h.next())
// console.log(h.next())
// console.log(h.next())

for (let i of h) {
  console.log(i)
}