<template>
  <div class=" min-w-[400px]">
    <form @submit.prevent="handleSubmit" class=" flex flex-col">
      <input type="email" placeholder="email" v-model="email" class="p-2 m-2 rounded-md"/>
      <input type="password" placeholder="password" v-model="password" class="p-2 m-2 rounded-md"/>
      <button type="submit">Sign in</button>
      <div>
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
import { reactive } from 'vue'

export default {
  setup() {
    //refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    //using hook
    const { error, signIn } = useSignIn();

    const handleSubmit = async () => {
      const user = await signIn(email.value, password.value);
    };

  //element ui form
  const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
//element ui end

    return { displayName, email, password, handleSubmit, error, form};
  },
};
</script>

<style></style>
