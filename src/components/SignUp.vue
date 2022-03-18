<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="display name" v-model="displayName">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="submit">Sign Up</button>
  </form>
</template>

<script>
import { async } from '@firebase/util'
import {ref} from 'vue'
import useSignup from '../hooks/useSignUp'
export default {
  setup(){
    //refs
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    //hooks
    const { error, signUp} = useSignup(email.value, password.value)

    const handleSubmit = async()=> {
    const user = await signUp (email.value, password.value, displayName.value, )
    console.log(user);
    
    }

    return {displayName,email, password, handleSubmit}
  }

}
</script>

<style>

</style>