<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/useUser";

const { avatar } = storeToRefs(useUserStore());
</script>
<template>
  <div
    class="p-4 h-[70vh] overflow-auto break-normal bg-scroll bg-contain flex flex-col items-end"
    style="background-image: url('../src/assets/bg1.jpeg')"
  >
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
