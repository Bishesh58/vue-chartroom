<template>
  <div class="">
    <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="email" v-model="email" />
      <input type="password" placeholder="password" v-model="password" />
      <button type="submit">Sign in</button>
      <div>
        {{ error }}
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useSignIn from "../hooks/useSignIn";

export default {
  setup() {
    //refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    //using hook
    const { error, signIn } = useSignIn();

    const handleSubmit = async () => {
      const user = await signIn(email.value, password.value);
    };

    return { displayName, email, password, handleSubmit, error };
  },
};
</script>

<style></style>
