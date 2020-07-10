
export default {    //类似于组件的methods，这里的方法可以对共享变量进行操作。vuex的store状态的更新唯一方式：提交mutation
  increment(state){
    state.counter++
  },
  decrement(state){
    state.counter--
  },
  incrementCount(state, payload) {
    console.log(payload.age)
    state.counter += payload.count
  },
  addStudent(state, stu) {
    state.students.push(stu)
  },
  updateInfoMu(state, payload) {
    state.info.name = payload

    //不能直接在mutation中进行异步操作
    /*setTimeout(() => {
      state.info.name = ''
    }, 1000)*/

  }
}
