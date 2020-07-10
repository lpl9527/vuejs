<template>
    <div>
      <h2>我是档案</h2>
      <p>获取地址传递的参数：</p>
      <p>{{$route.query}}</p>
      <p>{{$route.query.name}}</p>
      <p>{{$route.query.age}}</p>
      <p>{{$route.query.height}}</p>
    </div>
</template>

<script>
    export default {
      name: "Profile",
      created() {   //生命周期函数，创建时被调用
        console.log('Profile组件被创建了！')
        //document.title = '首页'
      }
    }
</script>

<style scoped>

</style>
