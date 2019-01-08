//与另一个模块中的函数冲突了
let data2 = 'module2 other data'

function foo() {
  console.log(`foo() ${data2}`)
}