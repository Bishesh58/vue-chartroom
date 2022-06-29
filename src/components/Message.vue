<script setup>
import { onBeforeMount, ref } from "vue";
import { db, auth } from "../Firebase/config";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/useUser";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

const allMessages = ref([]);
const user = auth.currentUser;
onBeforeMount(() => {
  const q = query(collection(db, "users"));

  onSnapshot(q, (querySnapshot) => {
    querySnapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        let avatarId = change.doc.data().avatarId;
        let userUid = change.doc.data().userUid;
        const qMessage = query(
          collection(db, "users", change.doc.id, "chats"),
          orderBy("createdAt")
        );
        onSnapshot(qMessage, (querySnapshot) => {
          querySnapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              const myData = change.doc.data();
              myData.avatarId = avatarId;
              myData.userUid = userUid;
              allMessages.value.push(myData);
            }
          });
        });
      }
    });
  });
});

const { avatar } = storeToRefs(useUserStore());
</script>
<template>
  <div
    class="p-4 h-[70vh] overflow-auto break-normal bg-scroll bg-contain flex flex-col items-end"
    style="background-image: url('../src/assets/bg1.jpeg')"
  >
    <div
      v-for="(item, index) in allMessages"
      :key="index"
      class="flex p-2 rounded-lg m-1 w-fit justify-center items-center self-end"
      :class="[user.uid === item.userUid ? 'bg-green-400' : 'bg-slate-300']"
    >
      <p>{{ item.message }}</p>

      <img
        :src="`https://avatars.dicebear.com/api/avataaars/${item.avatarId}.svg`"
        width="40"
        class="rounded-full px-2"
        alt="av"
      />
    </div>
  </div>
</template>
<style></style>
