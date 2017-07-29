// yield*后面会接一个Generator

function* G1 () {
  yield 'a'
  yield* G2()
  yield 'b'
}
function* G2 () {
  yield 'x'
  yield 'y'
}

for (let item of G1()) {
  console.log(item)
}
