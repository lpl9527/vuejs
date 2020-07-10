<template>
  <div id="app">
    {{result}}
  </div>
</template>

<script>

  //使用封装好的axios请求实例进行网络请求
  import {request} from "./network/request";  //导入非default时需要加上{}

  export default {
    name: 'App',
    data() {
      return {
        result: ''
      }
    },
    created() {   //组件创建完成时执行

      //适用于第一种方案：
      /*request(
  {   //必传参数，axios的参数配置
          url: '/home/multidata',
          type: 'GET'
        },
        res => {   //必传参数，成功回调函数
        this.result = res
        console.log('=================')
        console.log(res)
        },
        err => {    //必传参数，失败回调函数
        this.result = err
        console.log('=================')
        console.log(err)
        }
      )*/

      //适用于二、三种方案：
      request({
        url: '/home/multidata'
      }).then(res => {
        this.result = res
        console.log('=================')
        console.log(res)
      }).catch(err => {
        this.result = err
        console.log('=================')
        console.log(err)
      })

    }
  }
</script>

<style>

</style>
