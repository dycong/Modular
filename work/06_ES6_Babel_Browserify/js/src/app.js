//引入模块:import
import {foo, bar} from "./module1"
import {demo1, demo2} from "./module2"
import module3 from './module3'
import $ from 'jquery'

foo();
bar();
demo1();
demo2();
module3.setName('wangwu');
console.log(module3.name);
$('body').css('background', 'skyblue');