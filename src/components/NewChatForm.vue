import { doc, setDoc } from "firebase/firestore";

<template>
  <form @submit.prevent="saveMessage" class="w-full min-h-screen p-20 bg-slate-100">
    <input type="text" name="" placeholder="type your message here..." v-model="message"  class="w-1/2 p-3 border rounded-md"/>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {serverTimestamp} from 'firebase/firestore'

const name = ref("");
const message = ref("");
const auth = getAuth();
const user = auth.currentUser


const saveMessage = () => {
 const chats = {
  name: user.displayName,
  message: message.value,
  createdAt: serverTimestamp(),
};
  console.log(chats);
};
</script>

<style></style>
