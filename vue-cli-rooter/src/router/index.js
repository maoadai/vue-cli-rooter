import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children:[{
      name:'detail',
      path: ':name',
      component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
    },],
    meta:{
      auth:true
    }
  },
  {
    name:'detail',
    path: '/course/:name',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  },
  {
    path: '/login',
    name:'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})

//全局守卫
router.beforeEach((to,from,next)=>{
    //判断是否需要守卫
    if(to.meta.auth){
      if(window.islogin){
        next();
      }else{
        next('/login?redirect='+to.fullPath)
      }
    }else{
      next();
    }
})

export default router
