<template>
  <div>   <!--注意：当模板中代码超过1行时必须要有根元素-->
    <h2>{{$store.state.counter}}</h2>
    <p>拿到的共享数据的平方为：{{$store.getters.powerCounter}}</p>
    <p>年龄大于20的学生为：{{$store.getters.more20student}}</p>
    <p>年龄大于20的学生数量为：{{$store.getters.more20StuLength}}</p>
    <p>年龄大于指定年龄的学生为：{{$store.getters.moreStudent(18)}}</p>
  </div>
</template>

<script>
    export default {
        name: "Hello"
    }
</script>

<style scoped>

</style>
