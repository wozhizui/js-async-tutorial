// 通过执行 [Symbol.iterator] 的属性值（函数）来返回一个iterator对象
// iterator有两种方式：next和for...of

const arr = [100, 200, 300]
const iterator = arr[Symbol.iterator]()

// console.log(iterator.next())
// console.log(iterator.next()) 
// console.log(iterator.next())
// console.log(iterator.next())

for (let value of iterator) {
  console.log(value)
}