<template>
  <div class=" h-[80vh] flex justify-center items-center" >
    <div>
      <img src="src/assets/icons8-chat.gif" alt="alt">
    </div>
    <div v-if="showLogin" class=" bg-slate-300 p-8 rounded-2xl flex flex-col">
      <h3>Sign In</h3>
      <SignIn />
      <div>
        Don't have account yet?
        <span @click="showLogin = false">ClickMe</span>
      </div>
    </div>
    <div v-else>
      <h3>Sign up</h3>
      <SignUp />
      <div>
        already registered user?
        <span @click="showLogin = true">ClickMe</span>
      </div>
    </div>
  </div>
</template>

<script>
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import { ref } from "vue";
export default {
  components: { SignIn, SignUp },

  setup() {
    const showLogin = ref(true);

    return { showLogin };
  },
};
</script>

<style></style>
