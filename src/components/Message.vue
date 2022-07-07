<script setup>
import { onBeforeMount, ref, onDeactivated } from "vue";
import { db, auth } from "../Firebase/config";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/useUser";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  collectionGroup,
} from "firebase/firestore";

const allMessages = ref([]);
const user = auth.currentUser;
onBeforeMount(() => {});
const q = query(collection(db, "users"));

const unsub = onSnapshot(q, (querySnapshot) => {
  querySnapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
      let avatarId = change.doc.data().avatarId;
      let userUid = change.doc.data().userUid;
      let displayName = change.doc.data().displayName;
      const qMessage = query(collection(db, "users", change.doc.id, "chats"));
      onSnapshot(qMessage, (querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
          let container = document.getElementById("messageContainer");
          container.scrollTop = container.scrollHeight;
          if (change.type === "added") {
            const myData = change.doc.data();
            myData.avatarId = avatarId;
            myData.userUid = userUid;
            myData.displayName = displayName;
            allMessages.value.push(myData);
          }
        });
        allMessages.value.sort(
          (objA, objB) => Number(objA.createdAt) - Number(objB.createdAt)
        );
      });
    }
  });
});

const { avatar } = storeToRefs(useUserStore());

onDeactivated(() => {
  unsub();
});
</script>
<template>
  <div
    id="messageContainer"
    class="p-4 h-[70vh] min-h-96 overflow-y-auto break-normal bg-scroll bg-contain flex flex-col items-end"
    style="background-image: url('../src/assets/bg1.jpeg')"
  >
    <div
      v-for="(item, index) in allMessages"
      :key="index"
      class="flex p-2 rounded-lg m-1 w-fit items-end self-end"
    >
      <div class="mr-2 flex flex-col">
        <p
          class="rounded-l-2xl rounded-t-2xl flex flex-col p-3"
          :class="[user.uid === item.userUid ? 'bg-green-400' : 'bg-slate-300']"
        >
          {{ item.message }}
        </p>
        <!-- <p class="text-gray-500 self-end mr-1">{{ item.createdAt.toDate().toLocaleTimeString() }}</p> -->
      </div>

      <div class="flex justify-center items-center flex-col">
        <img
          :src="`https://avatars.dicebear.com/api/avataaars/${item.avatarId}.svg`"
          width="50"
          class="rounded-full"
          alt="av"
        />
        <p class="text-white text-sm">{{ item.displayName }}</p>
      </div>
    </div>
  </div>
</template>
<style></style>
