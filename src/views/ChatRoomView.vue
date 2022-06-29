<script setup>
import Navbar from "../components/Navbar.vue";
import NewChatFormVue from "../components/NewChatForm.vue";
import Message from "../components/Message.vue";
</script>
<template>
  <div class="bg-slate-100">
    <Navbar />
    <!-- message -->
    <Message/>
    <!-- ChatView -->
    <NewChatFormVue />
  </div>
</template>
<style></style>
