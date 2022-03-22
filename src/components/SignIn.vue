<template>
  <div class="min-w-[400px]">
    <h3 class="text-md font-bold uppercase pl-2">Login</h3>
    <form @submit.prevent="signin" class="flex flex-col">
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
      <button
        class="p-2 bg-blue-400 rounded-3xl m-2 cursor-pointer text-white hover:bg-blue-700"
      >
        Login
      </button>
      <div v-if="erMsg" class="text-red-700 p-2">
        {{ erMsg }}
      </div>
    </form>

    <!--  element UI form -->

    <!--  element UI form end-->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

//references
const displayName = ref("");
const email = ref("");
const password = ref("");
const erMsg = ref("");
const router = useRouter();

const signin = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((authUser) => {
      // Signed in
      const user = authUser.user;
      router.push({name: 'chatroom'})
    })
    .catch((error) => {
      switch(error.code){
        case "auth/invalid-email":
          erMsg.value = "Invalid email!";
          break;
        case "auth/user-not-found":
          erMsg.value = "No account with that email was found!";
          break;
        case "auth/wrong-password":
          erMsg.value = "Incorrect password";
          break;
        default:
          erMsg.value = error.message;
          break;
      }
    });
};

</script>

<style></style>
