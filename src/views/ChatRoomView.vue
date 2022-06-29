<script setup>
import { onBeforeMount } from "vue";
import Navbar from "../components/Navbar.vue";
import NewChatFormVue from "../components/NewChatForm.vue";
import Message from "../components/Message.vue";
import { auth } from "../Firebase/config";
import { useUserStore } from "../stores/useUser";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const userId = auth.currentUser.uid;
const { user } = storeToRefs(userStore);
onBeforeMount(async () => {
  await userStore.fetchUser(userId);
  userStore.fetchAvatar(user.value.avatarId);
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
