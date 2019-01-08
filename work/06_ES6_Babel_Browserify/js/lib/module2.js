'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
* 统一暴露
* export {xxx, yyy}
* */
function demo1() {
  console.log('module2 ---- demo1()');
};

function demo2() {
  console.log('module2 ----- demo2()');
};

exports.demo1 = demo1;
exports.demo2 = demo2;