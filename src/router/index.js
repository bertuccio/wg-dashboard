import Vue from 'vue'
import Router from 'vue-router'


import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import Home from '@/pages/Home'
import Dashboard from '@/pages/Dashboard'
import AdminPassword from '@/pages/AdminPassword'
import Server from '@/pages/wg/Server'

const VueRouter = new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: "/app/home"
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/app',
      name: 'Dashboard',
      redirect: "/app/home",
      component: Dashboard,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
          meta: {
            requiresAuth: true
          },
        },
        {
          path: 'wg/server',
          name: 'Server',
          component: Server,
          meta: {
            requiresAuth: true,
            reload: true
          },
        },
        {
          path: 'admin-password',
          name: 'AdminPassword',
          component: AdminPassword,
          meta: {
            requiresAuth: true,
            reload: true
          },
        }
      ]
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound,
      meta: {
        requiresAuth: false
      }
    },
    {
      // not found handler
      path: '*',
      redirect: { name: 'NotFound' }
    }
  ]
})


export default VueRouter
Vue.use(Router)
Vue.use(VueRouter)