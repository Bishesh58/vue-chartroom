import { getDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/config";
import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: {},
    avatar: "",
  }),
  getters: {
    getuser(state) {
      return state.user;
    },
    getAvatar(state) {
      return state.avatar;
    },
  },
  actions: {
    async fetchUser(userUid) {
      
      const docRef = doc(db, "users", userUid);
      const docSnap = await getDoc(docRef);
      console.log(docSnap)
      if (docSnap.exists()) {
        this.user = docSnap.data();
      } else {
        console.log("No such document!");
      }
    },
    fetchAvatar(avatarId) {
      this.avatar = `https://avatars.dicebear.com/api/avataaars/${avatarId}.svg`;
    },
  },
});
