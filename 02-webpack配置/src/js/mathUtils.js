/*数学相关函数*/

//两数相加
function add(num1, num2) {
    return num1 + num2;
}
//两数相乘
function mul(num1, num2) {
    return num1 * num2;
}

//commonJS导出写法
module.exports = {
    add,
    mul
}