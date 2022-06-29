<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/config";
import { storeToRefs } from "pinia";
import { setDoc, doc } from "@firebase/firestore";
import { db } from "../Firebase/config";
import { useUserStore } from "../stores/useUser";
import { Edit } from "@element-plus/icons-vue";

const router = useRouter();
//const user = auth.currentUser;

const userStore = useUserStore();
const { user, avatar } = storeToRefs(userStore);

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
  const avatarId = Math.round(Math.random() * 100000);
  userStore.fetchAvatar(avatarId);
  setDoc(
    doc(db, "users", auth.currentUser.uid),
    {
      avatarId,
    },
    {
      merge: true,
    }
  );
};
</script>

<template>
  <nav
    class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-between px-6 text-white"
  >
    <div class="flex items-center justify-center">
      <img :src="avatar" width="80" class="rounded-full p-1 -mb-3" alt="av" />

      <div class="flex flex-col items-start justify-center">
        <p class="">
          {{ user.displayName || user.email }}
        </p>
        <el-icon
          v-if="!auth.currentUser.isAnonymous"
          @click="changeAvatar"
          class="hover:cursor-pointer"
        >
          <Edit />
        </el-icon>
      </div>
    </div>

    <div class="flex space-x-2 mr-4">
      <button @click="handleLogout">Logout</button>
    </div>
  </nav>
</template>

<style></style>
