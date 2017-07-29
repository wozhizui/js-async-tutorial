// Generator 不是函数，更不是构造函数
function* G () {}
const g = G()

function* G1 () {
  this.a = 10
}

const g1 = G1()
console.log(g.a) //undefined