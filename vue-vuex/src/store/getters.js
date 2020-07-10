
export default {    //类似于组件的computed，可以对共享变量进行处理。其依赖的共享变量会与其相互改变
  powerCounter(state) {   //计算共享数据的平方
    return state.counter * state.counter
  },
  more20student(state) {  //过滤学生中年龄大于20的人
    return state.students.filter(s => s.age > 20)
  },
  more20StuLength(state, getters) { //获取年龄大于20的学生数量
    return getters.more20student.length
  },
  moreStudent(state) {  //获取年龄大于指定年龄的学生（传参）
    /*return function (age) {
      return state.students.filter(s => s.age > age)
    }*/
    return age => {
      return state.students.filter(s => s.age > age)
    }
  }
}
