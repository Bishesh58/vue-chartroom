<script setup>
import { ref, onBeforeMount} from "vue";
import { useRouter } from "vue-router";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/config";
import { XIcon } from "@heroicons/vue/solid";
import { useAvatarStore } from "../stores/avatars";
import { storeToRefs } from "pinia";
const router = useRouter();
const user = auth.currentUser;

const store  = useAvatarStore();
const { avatar } = storeToRefs(store);

onBeforeMount(()=> {
  store.fetchAvatars()
})
const handleLogout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("user is sign out!");
      router.push("/");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const changeAvatar = () => {
  store.fetchAvatars()
};
</script>

<template>
  <nav class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-between px-6 text-white">
    <div class="flex items-center justify-center">
      <div class="flex flex-col items-center justify-center">
        <img
         :src="avatar"
          width="80"
          class="rounded-full p-1"
          alt="av"
        />
        
        <XIcon
          class="w-4 h-4 -mt-8 -ml-20 hover:cursor-pointer text-gray-300 rounded-full border p-[1px]"
          @click="changeAvatar"
        />
      </div>

      <p class="">{{ user.displayName || user.email || `Guest(${user.uid.slice(0,7)})` }}</p>
    </div>

    <div class="flex space-x-2">
      <button @click="handleLogout">Logout</button>
    </div>
  </nav>
</template>

<style></style>
