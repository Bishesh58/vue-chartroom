import { ref } from "vue";
import { auth } from "../firebase/firebase";
import {signOut} from 'firebase/auth'

const error = ref(null);

const logout =async()=> {
    error.value = null;
    try {
       await signOut(auth)
        console.log("you have logged out!")
    } catch (e) {
        error.value = e.message
        console.log(e.message);
    }
}

const useLogout =()=> {
    return { logout, error}
}

export default useLogout