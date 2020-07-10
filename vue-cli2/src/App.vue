<template>

  <!--
  1.查看vue是否安装及版本
  vue &#45;&#45;version
  2.安装vue3及以上
  npm install -g @vue/cli
  3.拉取vue2模板，可以在vue3上使用vue2
  npm install -g @vue/cli-init

  vue2创建项目：
  vue init webpack my-project

  vue的template编译、渲染过程：
    1.runtime-compiler
      template -> ast(abstract syntax tree，抽象语法树) -> render函数 -> vdom(virtual dom，虚拟dom) -> UI(真实dom)
    2.runtime-only (性能相对较高，更轻量)
      render函数 -> vdom(virtual dom，虚拟dom) -> UI(真实dom)


  小知识点：1.js文件先要编译为字节码文件然后由浏览器V8引擎解释执行。
  2.node为js运行提供环境，不需使用浏览器就能运行。可以使用命令 node test.js 来执行js文件。
-->

  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
