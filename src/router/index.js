import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatRoomView from '../views/ChatRoomView.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

//auth guard
const requireAuth = async(to, from, next)=> {
  if(! await getCurrentUser())
    next({name: 'home'})
  else
    next()
}

//get the current User that returns promise
const getCurrentUser = async()=> {
  return new Promise((resolve, reject)=> {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user)=> {
        removeListener();
        resolve(user)
      },
      reject
    )
  })
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
