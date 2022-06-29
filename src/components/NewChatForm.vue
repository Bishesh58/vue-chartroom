<script setup>
import { ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../Firebase/config";
import { v4 as uuidv4 } from "uuid";
import { Star, Promotion } from "@element-plus/icons-vue";
import { useUserStore } from "../stores/useUser";
import { storeToRefs } from "pinia";

const name = ref("");
const message = ref("");

const user = auth.currentUser;

const userStore = useUserStore();
const { avatar } = storeToRefs(userStore);

const saveMessage = async () => {
  const uuid = uuidv4();
  const userUid = user.uid;
  const history = {
    message: message.value,
    createdAt: serverTimestamp(),
  };
  try {
    await setDoc(doc(db, "chats", userUid), { timestamp: serverTimestamp() });
    await setDoc(doc(db, "chats", userUid, "message", uuid), history);
    message.value = "";
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
</script>

<template>
  <form
    @submit.prevent="saveMessage"
    class="w-full py-10 px-9 bg-slate-100 flex justify-center"
  >
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
