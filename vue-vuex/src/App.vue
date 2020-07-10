<template>
  <div id="app">
    <h2>--------------App组件内容---------------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>   <!--使用了vuex的共享数据-->
    <button @click="addition()">+</button>
    <button @click="subtraction()">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent()">添加学生</button>

    <h2>--------------Vuex的getters---------------</h2>
    <p>拿到的共享数据的平方为：{{$store.getters.powerCounter}}</p>
    <p>年龄大于20的学生为：{{$store.getters.more20student}}</p>
    <p>年龄大于20的学生数量为：{{$store.getters.more20StuLength}}</p>
    <p>年龄大于指定年龄的学生为：{{$store.getters.moreStudent(18)}}</p>

    <h2>--------------Vuex的actions---------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo('aabbcc')">异步修改个人信息</button>

    <h2>--------------Vuex的modules---------------</h2>
    <p>module中姓名：{{$store.state.a.name}}</p>
    <button @click="updateName()">修改姓名</button>

    <h2>--------------Hello组件内容---------------</h2>
    <hello/>
  </div>
</template>

<script>

  import Hello from "./components/Hello";

  //vuex为vue提供集中式状态管理，为多个组件之间提供数据资源共享，并且是响应式的。
  //安装： npm install --save vuex

  export default {
    name: 'App',
    data(){
      return {
        message: 'vuex状态管理'
      }
    },
    components: {
      Hello
    },
    methods: {
      addition() {
        this.$store.commit('increment')   //通过mutations中的方法对vuex共享变量进行操作
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addCount(count) {   //加指定数量，通过提交mutation传参
        //1.一般的提交封装
        //this.$store.commit('incrementCount', count)
        //2.完整的提交封装
        this.$store.commit({
          type: 'incrementCount',    //事件类型，对应mutation中方法
          count: count, //多个参数时会以对象的形式接收
          age: 13
        })
      },
      addStudent(){
        const stu = {
          id: 113, name: 'java', age: 32
        }
        this.$store.commit('addStudent', stu)   //参数被称为mutation的payload（载荷）
      },
      updateInfo(name) {
        //this.$store.commit('updateInfoMu')
        //通过dispatch调用actions执行异步方法修改共享数据
        /*this.$store.dispatch('updateInfo', {
          name: {
            name: name
          },
          success: () => {
            console.log('名字已经异步修改成功！')
          }
        })*/

        //下面这种异步回调方法更好
        this.$store.dispatch('updateInfo', name)
          .then(res => {    //这里执行Promise方法的回调
            console.log(res)
          })

      },
      updateName(){
        this.$store.commit('updateName')
      }

    }
  }
</script>

<style>

</style>
