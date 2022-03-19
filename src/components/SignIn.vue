<template>
  <div class="">
    <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="email" v-model="email" />
      <input type="password" placeholder="password" v-model="password" />
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
