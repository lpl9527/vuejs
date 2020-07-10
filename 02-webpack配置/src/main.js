/*程序的入口文件*/

const {add, mul} = require('./js/mathUtils')   //commonJS模块化规范方式导入
import {name, age, height} from "./js/info";   //ES6方式导入

//调用方法
console.log(add(20, 30));
console.log(mul(10, 10));

console.log(name)
console.log(age)
console.log(height)

//加载css模块
require('./css/common.css')
//加载less css模块
require('./css/special.less')


//使用Vue进行开发
import Vue from 'vue'

new Vue({
    el: '#app',
    data: {
        message: 'hello webpack'
    }
})
