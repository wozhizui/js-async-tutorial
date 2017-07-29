function* G() {
  const a = yield 100
  console.log('a', a)
  const b = yield 200
  console.log('b', b)
  const c = yield 300
  console.log('c', c)
}

// 就是next向yield传递参数
const g = G()
console.log(g.next())
console.log(g.next('aaa'))
console.log(g.next('bbb'))
console.log(g.next('ccc'))