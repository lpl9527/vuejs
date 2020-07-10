import Vue from 'vue'
import Vuex from 'vuex'

//1.导入并使用插件
Vue.use(Vuex)

//2.创建Vuex的Store对象
const moduleA = {   //模块A
  state: {
    name: 'lpl'
  },
  mutations: {
    updateName(state) {
      state.name = 'zzyy'
    }
  },
  actions: {

  },
  getters: {

  }
}

const moduleB = {   //模块B
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
}

const store = new Vuex.Store({    //单一状态树管理，一般一个程序只创建一个store
  state: {    //类似于组件的data，存放vuex的共享数据
    counter: 100,
    students: [
      {id: 110, name: 'lpl', age: 23},
      {id: 111, name: 'vae', age: 19},
      {id: 112, name: 'vue', age: 25}
    ],
    info: {
      name: 'lpl',
      age: 24,
      address: 'anhui'
    }
  },
  mutations: {    //类似于组件的methods，这里的方法可以对共享变量进行操作。vuex的store状态的更新唯一方式：提交mutation
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
  },
  actions: {    //相当于组件异步methods，进行异步操作共享数据处理
    /*updateInfo(context, payload){
      setTimeout(() => {
        context.commit('updateInfoMu', payload.name.name)   //必须通过调用mutation方法进行修改
        //执行异步成功后回调
        payload.success();
      }, 1000)
    }*/
    //下面这种异步回调更好
    updateInfo(context, payload){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfoMu', payload)   //必须通过调用mutation方法进行修改

          //执行异步成功后回调，then()写在调用组件方
          resolve('回调数据')
        }, 1000)
      })

    }
  },
  getters: {    //类似于组件的computed，可以对共享变量进行处理。其依赖的共享变量会与其相互改变
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
  },
  modules: {    //可以对单一状态树进行模块划分
    a: moduleA,
    b: moduleB

  }
})

//3.导出对象
export default store
