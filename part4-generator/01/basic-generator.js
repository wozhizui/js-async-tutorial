function* Hello () {
  yield 100
  yield (function () {return 200})() //IIFE
  return 300
}

var h = Hello()
console.log(typeof h)

console.log(h.next())
console.log(h.next())
console.log(h.next())
console.log(h.next())
