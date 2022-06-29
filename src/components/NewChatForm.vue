<script setup>
import { ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase/config";
import { v4 as uuidv4 } from "uuid";
import { Star, Promotion} from "@element-plus/icons-vue";



const name = ref("");
const message = ref("");
const auth = getAuth();
const user = auth.currentUser;
const uid = uuidv4();

const saveMessage = async () => {
  const chats = {
    name: user.displayName,
    message: message.value,
    timestamp: serverTimestamp(),
  };
  try {
    await setDoc(doc(db, "chats", uid), chats);
    message.value = "";
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
</script>

<template>
  <form @submit.prevent="saveMessage" class="w-full py-10 px-9 bg-slate-100 flex justify-center">
    <input
      type="text"
      name=""
      autofocus
      placeholder="type your message here..."
      v-model="message"
      class="w-full py-2 px-6 outline-none border rounded-md mr-1"
    />
   <el-button type="success" size="large" @click="saveMessage">
      send<el-icon class="el-icon--right"><Promotion /></el-icon>
    </el-button>
  </form>
</template>

<style></style>
