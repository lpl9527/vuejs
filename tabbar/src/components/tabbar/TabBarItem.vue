<template>

  <!--将下面的内容填充到TabBar组件的插槽中-->
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="isActive">
      <slot name="item-icon-active"></slot>  <!--放置TabBar的每一项被激活的图标-->
    </div>
    <div  v-else>
      <slot name="item-icon"></slot>  <!--放置TabBar的每一项的图标-->
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>  <!--放置TabBar的每一项的文字-->
    </div>

  </div>

</template>

<script>
    export default {
      name: "TabBarItem",
      data(){
        return {
          //isActive: true
        }
      },
      computed: {
        isActive(){
          return this.$route.path.indexOf(this.path) !== -1  //如果当前活跃的路由中含有此路径，就为活跃
        },
        activeStyle(){    //激活的样式
          return this.isActive ? {color: this.activeColor} : {}   //动态绑定样式
        }
      },
      props: {
        path: String,    //这个变量记录要路由的地址，通过父传子传入
        activeColor: {
          type: String,
          default: 'red'
        }
      },
      methods: {
        itemClick: function () {
          this.$router.replace(this.path).catch(err => err)   //路由到指定地址
          //this.$router.push(this.path).catch(err => err)    //后面catch防止连续点击路由时报错
        }
      }
    }
</script>

<style scoped>

  .tab-bar-item{
    flex: 1;  /*对多个块进行水平均等分*/
    text-align: center; /*居中*/
    height: 49px;   /*基本移动端的tab-bar都是此高度*/
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;  /*设置图片大小*/
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>
