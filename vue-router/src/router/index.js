/*
  配置路由相关*/

import VueRouter from "vue-router";
import Vue from 'vue'

//导入路由映射组件
import Home from '../components/Home'
//import About from '../components/About'
import User from '../components/User'

//这里是路由懒加载的组件
const About = () => import('../components/About')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

//1.在Vue中使用router插件
Vue.use(VueRouter)

//2.创建VueRouter对象
//配置路由和Vue组件之间的映射关系
const routes = [
  {
    path: '/',
    redirect: '/home'    //页面刚进来时，路径对应‘/’，重定向到首页
  },
  {
    path: '/home',
    component: Home,
    children: [     //添加嵌套路由
      {
        path: "/",
        redirect: 'news'    //进入首页时默认进到新闻页面
      },
      {
        path: 'news',   //注意：这里不能加/
        component: HomeNews,
        meta: {
          title: '新闻'
        }
      },
      {
        path: 'message',
        component: HomeMessage,
        meta: {
          title: '消息'
        }
      }
    ],
    meta: {
      title: '首页'
    }
  },
  {               //about这里使用路由懒加载的方式加载，在真正访问到这个组件的时候才会进行加载(与app**.js打包文件分离)
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:userId',    //动态路由
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
    beforeEnter: (to, from, next) => {    //路由独享的守卫，可以在其中做一些控制操作
      //..
    }
  }
]
//创建Router实例
const router = new VueRouter({
  //配置路由
  routes: routes,
  mode: 'history',   //默认使用hash的方式进行路由，路径中会带上#，可以在此处修改为history路由的方式。history维护一个地址栈，通过history.pushState或replaceState进行页面前后切换
  linkActiveClass: 'active'   //修改全局激活class样式名称
})

//重写beforeEach方法，此方法在每个路由操作之前执行(在此可以配置一些全局操作)
//to 即将要进入的目标路由对象；from 当前导航即将要离开的路由对象；next 调用该方法后，才能进入下一个钩子。
//前置钩子（hock），即前置回调，也叫守卫
router.beforeEach((to, from, next) => {
  //从from指定的Route跳转到to指定的Router
  //设置每次跳转的页面的title
  //document.title = to.meta.title
  document.title = to.matched[0].meta.title   //matched[0]表示取匹配的路由的第一级
  //next方法表示路由是否向后执行，重写了此方法需要手动使其通过，可以用来作权限控制
  next()
})
//后置钩子，也叫守卫
router.afterEach((to, from) => {
  //console.log('执行了后置回调钩子！')
})

//3.将router对象传入Vue实例中
//导出，供Vue对象使用
export default router
