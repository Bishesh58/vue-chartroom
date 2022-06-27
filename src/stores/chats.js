import { defineStore } from "pinia";
import axios from "axios";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
  }),
  getters: {
    getusers(state) {
      return state.users;
    },
  },
  actions: {
    async fetchuserss() {
      this.users = ["my values"];
    },
  },
});
