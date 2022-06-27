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
      <button
        type="submit"
        class="p-2 bg-blue-400 rounded-3xl m-2 cursor-pointer text-white hover:bg-blue-700"
      >
        Sign Up
      </button>
      <div class="text-red-700 p-2">
        {{ erMsg }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { async } from "@firebase/util";
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "vue-router";
//refs
const displayName = ref("");
const email = ref("");
const password = ref("");
const erMsg = ref("");
const router = useRouter();
const handleSubmit = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName,
      })
        .then(() => {
          router.push({ name: "chatroom" });
        })
        .catch((error) => {
          console.log(error.message)
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      erMsg.value = error.message;
      // ..
    });
};
</script>

<style></style>
