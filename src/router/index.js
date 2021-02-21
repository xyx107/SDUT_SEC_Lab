import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import { getToken, removeToken, removeUserName } from '@/utils/user'

import Login from '@/views/login/Login'
import Register from '@/views/login/Register'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home')
    },
    // {
    //   path: '/',
    //   redirect: '/dashbord'
    // },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    // {
    //   path: '/mdedit/:id',
    //   name: 'mdedit',
    //   component: MdEdit
    // },
    {
      path: '/dashbord',
      name: 'dashbord',
      component: () => import('@/views/tools/'),
      children: [
        { path: '/manageartilce', name: 'manageartilce', component: () => import('@/views/tools/index') }
      ]
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/components/404')
    }
  ]
})

const whiteRouter = ['/', '/login', '/register', '/dashbord'] // 路由白名单

router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      removeToken()
      removeUserName()
      store.commit('user/SET_TOKEN', '')
      store.commit('Suser/ET_USERNAME', '')
      next()
    } else {
      next()
    }
  } else {
    if (whiteRouter.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
