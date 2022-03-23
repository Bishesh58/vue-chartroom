import { doc, setDoc } from "firebase/firestore";

<template>
  <form
    @submit.prevent="saveMessage"
    class="w-full min-h-screen p-20 bg-slate-100"
  >
    <input
      type="text"
      name=""
      placeholder="type your message here..."
      v-model="message"
      class="w-1/2 p-3 border rounded-md"
    />
  </form>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore"; 
import {db} from "../main"
import { v4 as uuidv4 } from 'uuid';

const name = ref("");
const message = ref("");
const auth = getAuth();
const user = auth.currentUser;
const uid = uuidv4()

const saveMessage = async() => {
  const chats = {
    name: user.displayName,
    message: message.value,
    createdAt: Timestamp.fromDate(new Date()),
  };
  try {
    await setDoc(doc(db, "chats", uid), chats);
    message.value = ""
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
</script>

<style></style>
