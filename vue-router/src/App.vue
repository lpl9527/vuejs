<template>
  <div id="app">
    <h2>此处使用路由组件</h2>

    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <!--tag属性用于指定将标签渲染为什么标签，默认为a标签
        active-class可以为被激活（点击）的router-link指定class名称即可指定样式。也可以在index.js路由配置中全局修改。
        replace指定history.replaceState方式，则不能进行页面前后切换-->
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link v-bind:to="'/user/' + userId" tag="button" replace>用户</router-link>
    <router-link :to="info" tag="button" replace>档案</router-link>

    <!--<button @click="homeClick()">首页</button>
    <button @click="aboutClick()">关于</button>
    <button @click="profileClick()">档案</button>-->

    <!--作为一个占位符，放置路由到的组件-->
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>


<script>
//导出当前组件
export default {
  name: 'App',
  data(){
    return {
      userId: 'lpl',
      info: {
        path: '/profile',
        query: {
          name: 'lpl',
          age: 23,
          height: 1.78
        }
      }
    }
  },
  methods: {
    homeClick: function () {  //实现路由跳转
      this.$router.push('/home')    //$表示全局的意思，这个$router就是创建的VueRouter实例对象
    },
    aboutClick: function () {
      this.$router.push('/about')
      //this.$router.replace('/about')  //相应的replace就不能进行页面的前后切换
    },
    profileClick: function () {  //通过地址传递参数
      this.$router.push({
        path: '/profile',
        query: {
          name: 'lpl',
          age: 23,
          height: 1.78
        }
      })
    }
  }
}
</script>

<!--样式-->
<style>
  .active{
    color: red;
  }
</style>
