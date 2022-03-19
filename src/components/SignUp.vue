<template>
  <div class="min-w-[400px]">
    <h3 class="text-md font-bold uppercase pl-2">Sign up</h3>
    <form @submit.prevent="handleSubmit" class="flex flex-col">
      <input
        type="text"
        placeholder="display name"
        v-model="displayName"
        class="p-2 m-2 rounded-md"
      />
      <input
        type="email"
        placeholder="email"
        v-model="email"
        class="p-2 m-2 rounded-md"
      />
      <input
        type="password"
        placeholder="password"
        v-model="password"
        class="p-2 m-2 rounded-md"
      />
      <div class="text-red-700 p-2">
        {{ error }}
      </div>

      <button type="submit" class="p-2 bg-blue-400 rounded-3xl m-2 cursor-pointer text-white hover:bg-blue-700">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { async } from "@firebase/util";
import { ref } from "vue";
import useSignup from "../hooks/useSignUp";
export default {
  setup() {
    //refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    //hooks
    const { error, signUp } = useSignup();

    const handleSubmit = async () => {
      const user = await signUp(email.value, password.value, displayName.value);
      console.log(user);
    };

    return { displayName, email, password, handleSubmit, error };
  },
};
</script>

<style></style>
