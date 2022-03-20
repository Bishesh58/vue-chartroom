<template>
  <div class="min-w-[400px]">
    <h3 class="text-md font-bold uppercase pl-2">Login</h3>
    <form @submit.prevent="handleSubmit" class="flex flex-col">
      <input
        type="email"
        placeholder="email"
        v-model="email"
        class="p-2 m-2 rounded-md"
      />
      <input
        type="password"
        placeholder="password"
        v-model="password"
        class="p-2 m-2 rounded-md"
      />
      <button class="p-2 bg-blue-400 rounded-3xl m-2 cursor-pointer text-white hover:bg-blue-700">
        Login
      </button>
      <div class="text-red-700 p-2">
        {{ error }}
      </div>
    </form>

    <!--  element UI form -->

    <!--  element UI form end-->
  </div>
</template>

<script>
import { ref } from "vue";
import useSignIn from "../hooks/useSignIn";
import { reactive } from "vue";

export default {
  setup(props, context) {
    //refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    //using hook
    const { error, signIn } = useSignIn();

    const handleSubmit = async () => {
      const user = await signIn(email.value, password.value);
    if(!error.message){
      context.emit('login')
    }
    
    };

    //element ui form
    const form = reactive({
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: "",
    });

    const onSubmit = () => {
      console.log("submit!");
    };
    //element ui end

    return { displayName, email, password, handleSubmit, error, form };
  },
};
</script>

<style></style>
