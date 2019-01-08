/*
* 统一暴露
* export {xxx, yyy}
* */
function demo1() {
  console.log('module2 ---- demo1()')
};

function demo2() {
  console.log('module2 ----- demo2()')
};

export {demo1,demo2};