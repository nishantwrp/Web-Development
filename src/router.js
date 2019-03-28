import Vue from 'vue'
import Router from 'vue-router'
import create from './components/create.vue'
import about from './components/about.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'create',
      component: create
    },
    {
      path: '/about',
      name: 'about',
      component: about

    }
  ]
})
