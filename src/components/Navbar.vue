<script setup>
import { ref, onBeforeMount} from "vue";
import { useRouter } from "vue-router";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/config";
import { PencilIcon } from "@heroicons/vue/solid";
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
  <nav class="bg-purple-400 flex justify-between p-4">
    <div class="flex items-center justify-center">
      <div class="flex flex-col items-center justify-center">
        <img
         :src="avatar"
          width="80"
          class="border rounded-full p-1"
          alt="av"
        />
        
        <PencilIcon
          class="w-4 h-4 -mt-8 -mr-14 hover:cursor-pointer text-gray-300"
          @click="changeAvatar"
        />
      </div>

      <p class="ml-2">{{ user.displayName || user.email }}</p>
    </div>

    <div class="flex space-x-2">
      <button @click="handleLogout">Logout</button>
    </div>
  </nav>
</template>

<style></style>
