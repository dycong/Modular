/*
* 分别暴露
* export function xxx() {}
* export let xxx = function () {}
* */
export let data = '0107';

export function foo() {
  console.log('module1----foo()',data);
}

export function bar() {
  console.log('module1----bar()',data);
}
