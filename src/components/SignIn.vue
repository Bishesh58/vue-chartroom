<template>
  <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="submit">Sign in</button>
      
  </form>
</template>

<script>
import {ref} from 'vue'
import useSignIn from '../hooks/useSignIn'

export default {
  setup(){
    //refs
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit =()=> {
      const signedUser = useSignIn(email.value, password.value)
      console.log(signedUser);
    }

    return {displayName,email, password, handleSubmit}
  }

}
</script>

<style>

</style>