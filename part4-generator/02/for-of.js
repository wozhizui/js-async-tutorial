// 在 ES6 中，原生具有[Symbol.iterator]属性数据类型有：数组、某些类似数组的对象
// （如arguments、NodeList）、Set和Map

for (let value of [100, 200, 300]) {
  console.log(value)
}