import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' // 引入 Home页面组件

// 注册路由插件
Vue.use(VueRouter)

// 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
