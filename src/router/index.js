import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/login'
import Dashboard from '@/pages/dashboard'
import Profile from '@/pages/profile'
import AddTask from '@/pages/addTask'
import EditTask from '@/pages/editTask'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/add_task',
      name: 'AddTask',
      component: AddTask
    },
    {
      path: '/edit_task',
      name: 'EditTask',
      component: EditTask
    }
  ]
})
