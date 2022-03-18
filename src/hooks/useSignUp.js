import { ref } from "vue";
import { auth, createUserWithEmailAndPassword, updateProfile } from "../firebase/firebase";

const error = ref(null);

const signUp = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Could not complete the sign up");
    }
    await updateProfile(res.user, { displayName });
    error.value = null

    return res
  } catch (err) {
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signUp };
};

export default useSignup;
