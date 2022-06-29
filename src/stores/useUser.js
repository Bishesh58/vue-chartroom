import { getDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/config";
import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: {},
  }),
  getters: {
    getuser(state) {
      return state.user;
    },
  },
  actions: {
    async fetchUser(userUid) {
      const docRef = doc(db, "users", userUid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.user = docSnap.data();
      } else {
        console.log("No such document!");
      }
    },
  },
});
