'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;
exports.bar = bar;
/*
* 分别暴露
* export function xxx() {}
* export let xxx = function () {}
* */
var data = exports.data = '0107';

function foo() {
  console.log('module1----foo()', data);
}

function bar() {
  console.log('module1----bar()', data);
}