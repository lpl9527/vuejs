<template>
    <div>
      <h2>用户界面</h2>
      <p>获取到动态路由路径变量：{{userId}}</p>
      <p>也可以通过这种方式获取：{{$route.params.userId}}</p>
    </div>
</template>

<script>
    export default {
      name: "User",
      computed: {
        userId: function () {
          return this.$route.params.userId    //$route表示当前活跃的那个路由
        }
      }
    }
</script>

<style scoped>

</style>
