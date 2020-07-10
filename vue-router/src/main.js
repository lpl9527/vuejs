import Vue from 'vue'
import App from './App'
import router from './router'   //导入router，如果导入的是一个目录，则会自动寻找该目录下的index文件导入

Vue.config.productionTip = false  //开发时，关闭生产环境提示信息

new Vue({
  el: '#app',
  router,       //增强写法，等同于router: router
  render: h => h(App)   //将导入的App组件渲染覆盖到index.html中
})
