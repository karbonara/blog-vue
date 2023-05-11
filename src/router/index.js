import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'news',
    component: function () {
      return import('@/views/NewsView.vue')
    }
  },
  {
    path: '/friends',
    name: 'friends',
    component: function () {
      return import('@/views/FriendsView.vue')
    }
  },
  {
    path: '/messages',
    name: 'messages',
    component: function () {
      return import('@/views/MessagesView.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
