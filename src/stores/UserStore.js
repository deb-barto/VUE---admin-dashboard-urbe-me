import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  //state
  state() {
    return {
      name: "Alexandre",
      amountMessages: 1,
      hasNotification: true,
    };
  },

  //actions
  actions: {
    setUser(userData) {
      this.name = userData.name;
      this.amountMessages = userData.amountMessages;
      this.hasNotification = userData.hasNotification;
    },
  },
});
