<script setup>
import { onBeforeMount } from "vue";
import Navbar from "../components/Navbar.vue";
import NewChatFormVue from "../components/NewChatForm.vue";
import Message from "../components/Message.vue";
import { auth } from "../Firebase/config";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/useUser";

const userStore = useUserStore();
const userId = auth.currentUser.uid;

onBeforeMount(async () => {
  await userStore.fetchUser(userId);
});
</script>
<template>
  <div class="bg-slate-100">
    <Navbar />
    <!-- message -->
    <Message />
    <!-- ChatView -->
    <NewChatFormVue />
  </div>
</template>
<style></style>
