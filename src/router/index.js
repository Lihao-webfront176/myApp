import Vue from 'vue'
import Router from 'vue-router'
import person from './person'
import study from './study'
Vue.use(Router)

let routes = new Set([...person, ...study])

const router = new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  },
  // mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
