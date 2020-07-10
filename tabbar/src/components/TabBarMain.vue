<template>
  <!--使用tab-bar组件-->
  <tab-bar>
    <tab-bar-item path="/home" active-color="red">   <!--为子组件中属性path传路由地址，传递激活项文字的颜色，默认red-->
      <img slot="item-icon-active" src="~@/assets/img/tabbar/home-active.svg" alt="">  <!--使用路径别名，也可以不加~ -->
      <img slot="item-icon" src="../assets/img/tabbar/home.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="category" active-color="blue">
      <img slot="item-icon-active" src="../assets/img/tabbar/home-active.svg" alt="">
      <img slot="item-icon" src="../assets/img/tabbar/home.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" active-color="green">
      <img slot="item-icon-active" src="../assets/img/tabbar/home-active.svg" alt="">
      <img slot="item-icon" src="../assets/img/tabbar/home.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="profile" active-color="yellow">
      <img slot="item-icon-active" src="../assets/img/tabbar/home-active.svg" alt="">
      <img slot="item-icon" src="../assets/img/tabbar/home.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>

  </tab-bar>
</template>

<script>

  import TabBar from "./tabbar/TabBar";  //引入Tabbar组件
  import TabBarItem from "./tabbar/TabBarItem";  //引入TabbarItem组件

  export default {
      name: "TabBarMain",
    components: {
      TabBar: TabBar,
      TabBarItem : TabBarItem
    }
  }
</script>

<style scoped>

</style>
