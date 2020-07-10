<template>
  <div id="app">

    <router-view></router-view>   <!--展示路由到组件-->

    <tab-bar-main/>
  </div>
</template>

<script>
import TabBarMain from "./components/TabBarMain";

export default {
  name: 'App',
  components: {
    TabBarMain
  }
}
</script>

<style>
@import "./assets/css/base.css";    /*引入外部css样式文件*/

</style>
