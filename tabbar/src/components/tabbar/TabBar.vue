<template>
  <div id="tab-bar">

    <!--这个插槽用来放放置TabBar的每一项-->
    <slot></slot>

  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  #tab-bar{
    display: flex;  /*使文字水平分布*/
    background-color: #f6f6f6;  /*设置背景*/
    position: fixed;  /*移动到底部*/
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);   /*添加阴影割线*/
  }

</style>
