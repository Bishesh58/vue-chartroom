<template>
  <div class="h-[80vh] flex justify-center items-center">
    <div>
      <img src="src/assets/icons8-chat.gif" alt="alt" />
    </div>
    <div v-if="showLogin" class="bg-slate-300 p-8 rounded-2xl flex flex-col shadow-md">
      <SignIn  @login="enterChat"/>
      <div class="text-sm pl-4 my-4">
        Don't have account yet?
        <span
          @click="showLogin = false"
          class="bg-gray-100 px-[8px] py-[3px] rounded-full cursor-pointer mx-2 hover:bg-slate-400"
          >Sign up</span
        >
      </div>
    </div>
    <div v-else class="bg-slate-300 p-8 rounded-2xl flex flex-col shadow-md">
      <SignUp @signup="enterChat"/>
      <div class="text-sm pl-4 my-4">
        already registered user?
        <span
          @click="showLogin = true"
          class="bg-gray-100 px-[8px] py-[3px] rounded-full cursor-pointer mx-2 hover:bg-slate-400"
          >Login</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: { SignIn, SignUp },

  setup() {
    const showLogin = ref(true);
    const router = useRouter();
  const enterChat =()=> {
    router.push({name: 'chatroom'})
  }
    return { showLogin, enterChat };
  },
};
</script>

<style></style>
