import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { title: '首页', isShowNav: false, isShowBack: false }
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../pages/Category.vue'),
    meta: { title: '分类', isShowNav: true, isShowBack: false }
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../pages/Message.vue'),
    meta: { title: '消息', isShowNav: true, isShowBack: true }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../pages/Cart.vue'),
    meta: { title: '购物车', isShowNav: true, isShowBack: true }
  },
  {
    path: '/login', //路由路径
    name: 'login', //懒加载Login组件
    component: () => import('../pages/Login.vue'),
    meta: { title: '登录', isShowNav: true, isShowBack: true }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../pages/Register.vue'),
    meta: { title: '注册', isShowNav: true, isShowBack: true }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../pages/User.vue'),
    meta: { title: '用户', isShowNav: true, isShowBack: false }
  },
  {
    path: '/proDetails/:id',
    name: 'proDetails',
    component: () => import('../components/HomeProDetails.vue'),
    meta: { title: '商品详情' }
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' - 微商城'
  next()
})

export default router
