<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="display name" v-model="displayName">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="submit">Sign in</button>
  </form>
</template>

<script>
import {ref} from 'vue'
export default {
  setup(){
    //refs
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit =()=> {
      console.log("dname=>",displayName.value, email.value, password.value)
    }

    return {displayName,email, password, handleSubmit}
  }

}
</script>

<style>

</style>