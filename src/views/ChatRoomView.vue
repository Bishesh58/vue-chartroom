<template>
  <p>Hello user!</p>
  <div>
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script>
import useLogout from "../hooks/useLogout";
import { useRouter } from "vue-router";
export default {
    setup(){
        const {logout, error } = useLogout()
        const router = useRouter();
        const handleLogout =async() =>{
           await logout()
           if(!error.value){
               console.log("user is logged out!!")
           }
            router.push('/')
        }

        return {logout, error, handleLogout}
    }
};
</script>

<style></style>
