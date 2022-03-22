import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatRoomView from '../views/ChatRoomView.vue'
import {auth} from "../firebase/firebase"

//auth guard
const requireAuth =(to, from, next)=> {
  let currentUser = auth.currentUser
  if(!currentUser)
    next({name: 'home'})
  else
    next()
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: ChatRoomView,
      beforeEnter: requireAuth
      
    }
  ]
})

export default router
