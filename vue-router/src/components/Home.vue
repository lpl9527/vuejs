<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页的内容</p>
    <p>下面是首页子组件中的内容：</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <keep-alive>
      <router-view/>
    </keep-alive>   <!--keep-alive标签包含匹配的路由会被缓存-->

  </div>
</template>

<script>
    //导出组件
    export default {
      name: "Home",
      data(){
        return {
          path: '/home/news'
        }
      },
      created() {
        console.log('Home组件被创建了！')
      },
      destroyed() {
        console.log('Home组件被销毁了！')
      },
      activated() {   //这两个函数只有组件被缓存使用了keep-alive时才有效
        console.log('Home组件是活跃的！')
        this.$router.push(this.path).catch(err => err)
      },
      deactivated() {
        console.log('Home组件不活跃了！')
      },
      beforeRouteLeave(to, from, next){   //用于记录子组件的上一次状态
        this.path = this.$route.path
        next();
      }
    }
</script>

<style scoped>

</style>
