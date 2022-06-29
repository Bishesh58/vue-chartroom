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
        required
      />

      <input
        type="password"
        placeholder="password"
        v-model="password"
        class="p-2 m-2 rounded-md"
        required
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
import {
  setDoc,
  addDoc,
  collection,
  doc,
  serverTimestamp,
} from "@firebase/firestore";
import { db } from "../Firebase/config";

//refs
const displayName = ref("");
const email = ref("");
const password = ref("");
const erMsg = ref("");
const router = useRouter();
const handleSubmit = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(async (newAthUser) => {
      const avatarId = Math.round(Math.random() * 100000);
      const userUid = newAthUser.user.uid;
      await setDoc(doc(db, "users", userUid), {
        avatarId,
        email: email.value,
        displayName: displayName.value,
        userUid,
        timestamp: serverTimestamp(),
      });

      router.push({ name: "chatroom" });
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          erMsg.value = "Invalid email!";
          break;
        case "auth/email-already-in-use":
          erMsg.value = "email already taken!";
          break;
        case "auth/weak-password":
          erMsg.value = "password should be 6 character long";
          break;
        default:
          erMsg.value = error.message;
          break;
      }
    });
};
</script>

<style></style>
