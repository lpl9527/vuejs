import Vue from 'vue'
import Vuex from 'vuex'

//导入vuex的store的各个选项
import mutations from "./mutations";    //相当于组件的方法
import actions from "./actions";        //存放异步处理方法
import getters from "./getters";        //相当于组件的计算属性

//导入store模块
import moduleA from "./modules/moduleA";
import moduleB from "./modules/moduleB";

//1.导入并使用插件
Vue.use(Vuex)

//2.创建Vuex的Store对象

const state = {    //类似于组件的data，存放vuex的共享数据。一般state不从vuex的主配置中抽取出去，为了便于管理，其他模块都会抽取出去
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
}

const store = new Vuex.Store({    //单一状态树管理，一般一个程序只创建一个store
  state,
  mutations,
  actions,
  getters,
  modules: {    //可以对单一状态树进行模块划分
    a: moduleA,
    b: moduleB
  }
})

//3.导出对象
export default store
