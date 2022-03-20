<template>
  <p>Hello user!</p>
  <div>
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script>
import useLogout from "../hooks/useLogout";
import { useRouter } from "vue-router";
import getUser from '../hooks/getUser'
export default {
    setup(){
        const {logout, error } = useLogout()
        const router = useRouter();
        const {user} = getUser()

        const handleLogout =async() =>{
           await logout()
           if(!error.value){
               console.log("user is logged out!!")
           }
            router.push('/')
        }

        return {logout, error, handleLogout, user}
    }
};
</script>

<style></style>
