// 测试Symbol数据类型
// console.log(Array.prototype[Symbol.iterator]) // [Function: values]

// Symbol数据类型也可以作为对象属性的key
var obj = {}
obj.a = 100
obj[Symbol.iterator] = 200
console.log(obj) // {a: 100, Symbol(Symbol.iterator): 200}