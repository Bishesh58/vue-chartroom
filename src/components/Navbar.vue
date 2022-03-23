<template>
  <nav class="bg-purple-400 flex justify-between p-4">
    <p>{{}}</p>
    <div class="flex space-x-2">
      <p>{{ }}</p>
      <button @click="handleLogout">Logout</button>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import { getAuth, signOut } from "firebase/auth";

const router = useRouter();

const handleLogout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("user is sign out!")
      router.push("/")
    })
    .catch((error) => {
      console.log(error.message)
    });
};
</script>

<style></style>
