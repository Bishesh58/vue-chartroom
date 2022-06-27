import { defineStore } from "pinia";
import axios from "axios";

export const useAvatarStore = defineStore("avatar", {
  state: () => ({
    avatar: "",
  }),
  getters: {
    getAvatar(state) {
      return state.avatar;
    },
  },
  actions: {
    async fetchAvatars() {
      this.avatar = `https://avatars.dicebear.com/api/avataaars/${Math.random()}.svg`;
    },
  },
});
