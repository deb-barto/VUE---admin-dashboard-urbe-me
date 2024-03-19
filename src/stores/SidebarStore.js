import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", {
  //state
  state() {
    return {
      isOpen: false,
    };
  },

  //actions
  actions: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    close() {
      this.isOpen = false;
    },
  },
});
