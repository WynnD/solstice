import Vue from 'vue'
import Router from 'vue-router'
import ContactsList from '@/components/ContactsList'
import ContactPage from '@/components/ContactPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contact List',
      component: ContactsList
    },
    {
      path: '/contact/:id',
      name: 'Contact Info',
      component: ContactPage
    }
  ]
})
