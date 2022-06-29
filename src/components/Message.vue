<script setup>
import { onBeforeMount, ref } from "vue";
import { db } from "../Firebase/config";
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

onBeforeMount(() => {
  const q = query(collection(db, "chats"));
  // onSnapshot(q, (querySnapshot) => {
  //   allMessages.value = []
  //   querySnapshot.forEach((doc) => {
  //     //inside subcollection
  //     let messages = [];
  //     const qMessage = query(collection(db, "chats", doc.id, "message"), orderBy('createdAt'));
  //     onSnapshot(qMessage, (querySnapshot) => {
  //       messages = []
  //       querySnapshot.forEach((doc) => {
  //         //inside subcollection
  //         messages.push(doc.data())
  //         console.log(messages)
  //       });
  //     });
  //   });
  // });

  onSnapshot(q, (querySnapshot) => {
    querySnapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        console.log("new data: ", change.doc.data());
        const qMessage = query(
          collection(db, "chats", change.doc.id, "message"),
          orderBy("createdAt")
        );
        onSnapshot(qMessage, (querySnapshot) => {
          querySnapshot.docChanges().forEach((change) => {
            //inside subcollection
            if (change.type === "added") {
              allMessages.value.push(change.doc.data());
              console.log(change.doc.data())
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
      class="flex p-2 bg-slate-300 border rounded-lg m-1 w-fit justify-center items-center self-start"
    >
      <p>{{ item.message }}</p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <div
      class="flex p-2 bg-green-400 rounded-lg m-1 w-fit justify-center items-center"
    >
      <p>your message</p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <div
      class="flex p-2 bg-green-400 rounded-lg m-1 w-fit justify-center items-center"
    >
      <p>
        your message Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Odit nostrum molestiae ipsum deleniti. Enim dicta maxime ad expedita how
        are youasdfklj hello bishesh illo, odio sit neque est dolorum, quia
        culpa alias voluptatum veritatis.
      </p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <!-- testing -->
    <div
      class="flex p-2 bg-slate-300 border rounded-lg m-1 w-fit justify-center items-center self-start"
    >
      <p>others message</p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <div
      class="flex p-2 bg-green-400 rounded-lg m-1 w-fit justify-center items-center"
    >
      <p>your message</p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <div
      class="flex p-2 bg-green-400 rounded-lg m-1 w-fit justify-center items-center"
    >
      <p>
        your message Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Odit nostrum molestiae ipsum deleniti. Enim dicta maxime ad expedita how
        are youasdfklj hello
      </p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <!-- testing -->
    <div
      class="flex p-2 bg-slate-300 border rounded-lg m-1 w-fit justify-center items-center self-start"
    >
      <p>others message</p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <div
      class="flex p-2 bg-green-400 rounded-lg m-1 w-fit justify-center items-center"
    >
      <p>your message</p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <div
      class="flex p-2 bg-green-400 rounded-lg m-1 w-fit justify-center items-center"
    >
      <p>
        your message Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Odit nostrum molestiae ipsum deleniti. Enim dicta maxime ad expedita how
        are youasdfklj hello bishesh illo, odio sit neque est dolorum, quia
        culpa alias voluptatum veritatis.
      </p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <div
      class="flex p-2 bg-slate-300 border rounded-lg m-1 w-fit justify-center items-center"
    >
      <p>others message</p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <div
      class="flex p-2 bg-green-400 rounded-lg m-1 w-fit justify-center items-center"
    >
      <p>your message</p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <div
      class="flex p-2 bg-green-400 rounded-lg m-1 w-fit justify-center items-center"
    >
      <p>
        your message Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Odit nostrum molestiae ipsum deleniti. Enim dicta maxime ad expedita how
        are youasdfklj
      </p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <div
      class="flex p-2 bg-slate-300 border rounded-lg m-1 w-fit justify-center items-center"
    >
      <p>others message</p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <div
      class="flex p-2 bg-green-400 rounded-lg m-1 w-fit justify-center items-center"
    >
      <p>your message</p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <div
      class="flex p-2 bg-green-400 rounded-lg m-1 w-fit justify-center items-center"
    >
      <p>
        your message Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Odit nostrum
      </p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <div
      class="flex p-2 bg-slate-300 border rounded-lg m-1 w-fit justify-center items-center"
    >
      <p>others message</p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <div
      class="flex p-2 bg-green-400 rounded-lg m-1 w-fit justify-center items-center"
    >
      <p>your message</p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <div
      class="flex p-2 bg-green-400 rounded-lg m-1 w-fit justify-center items-center"
    >
      <p>
        your message Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Odit nostrum molestiae ipsum deleniti. Enim dicta maxime ad expedita how
        are youasdfklj hello bishesh illo, odio sit neque est dolorum, quia
        culpa alias voluptatum veritatis.
      </p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <div
      class="flex p-2 bg-slate-300 border rounded-lg m-1 w-fit justify-center items-center"
    >
      <p>others message</p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <div
      class="flex p-2 bg-green-400 rounded-lg m-1 w-fit justify-center items-center"
    >
      <p>your message</p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
    <div
      class="flex p-2 bg-green-400 rounded-lg m-1 w-fit justify-center items-center"
    >
      <p>
        your message Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Odit nostrum mole
      </p>
      <img :src="avatar" width="40" class="rounded-full px-2" alt="av" />
    </div>
  </div>
</template>
<style></style>
