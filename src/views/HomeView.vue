<template>
  <div v-if="showLogin">
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
