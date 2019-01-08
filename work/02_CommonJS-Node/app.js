let module1 = require('./module/module1');
let module2 = require('./module/module2');
let module3 = require('./module/module3');

let uniq = require('uniq');

let arr = [2,2,3,3,4,4,5,5,1,1,6,7,8,9,9,9,11,10];

module1.foo();
module1.bar();
module2();
module3.foo();
module3.bar();

console.log(uniq(arr));