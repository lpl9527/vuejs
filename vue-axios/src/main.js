import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

//1.安装axios 使用命令： npm install --save axios

//2.使用全局的axios，传入相关配置

//设置axios全局属性
axios.defaults.baseURL = 'http://123.207.32.32:8000'    //设置基础url
axios.defaults.timeout = 5000    //设置超时时间，单位毫秒


//发送get请求，不带参数
axios({
  url: '/home/multidata?callback=test',
  method: 'GET'
}).then(res => {
  console.log(res)
})
//发送get请求，携带参数
axios({
  url: 'http://123.207.32.32:8000/home/data',
  method: 'GET',
  timeout: 6000,
  params: {     //注意：params属性是get请求的参数配置，post请求的参数配置使用data
    type: 'sell',
    page: 2
  }
}).then(res => {
  console.log(res)
})

//使用axios发送并发请求
axios.all([
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }),
  axios({
    url: 'http://123.207.32.32:8000/home/data',
    params: {
      type: 'sell',
      page: 2
    }
  })
]).then(results => {
  console.log(results[0]);
  console.log(results[1]);
})

//------------------------------------------------------------------------------------

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
