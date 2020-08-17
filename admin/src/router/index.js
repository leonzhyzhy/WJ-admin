import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import user from '../views/user/index.vue'
import login from '../views/login.vue'
import roles from '../views/user/roles.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/user',
    name: 'user',
    component: user
  }, {
    path: '/login',
    name: login,
    component: login
  }, {
    path: '/roles',
    name: roles,
    component: roles
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    const token = sessionStorage.getItem('Token')
    if (!token) {
      next('/login')
    } else {
      next()
    }
  }
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
