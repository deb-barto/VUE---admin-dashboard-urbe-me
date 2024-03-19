<template>
  <header class="w-full">
    <div
      class="fixed flex justify-center items-center bg-white border-b-[1px] border-gray-200 w-full px-5 h-16 top-0 z-[99]"
    >
      <nav class="flex justify-between items-center w-full">

        <!-- first block -->
        <div class="flex items-center gap-6">

          <!-- logo -->
          <router-link to="/" class="hidden xsm:block">
            <img src="/images/logo.png" class="w-[45px] h-[45px]" />
          </router-link>

          <!-- menu button (only on mobile) -->
          <button @click="sidebar.toggle" class="flex flex-col gap-1 md:hidden">
            <span class="block h-[3px] w-5 rounded-full bg-gray-900"></span>
            <span
              class="block h-[3px] w-3 rounded-full bg-gray-900 transition-all relative "
              :class="sidebar.isOpen ? 'left-2' : 'left-0 xl:left-2'"
              ></span>
            <span class="block h-[3px] w-5 rounded-full bg-gray-900"></span>
          </button>

          <!-- search bar -->
          <div class="hidden md:block">
            <SearchInput />
          </div>
        </div>

        <!-- second block  -->
        <div class="flex items-center gap-5">

          <!-- notification -->
          <router-link to="/">
            <NotificationHeader />
          </router-link>

          <!-- avatar -->
          <router-link to="/">
            <img
              src="/images/avatar.jpg"
              alt="Alexandre"
              class="w-8 h-8 rounded-full"
            />
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { useSidebarStore } from "../../stores/SidebarStore";
import SearchInput from "../SearchInput/SearchInput.vue";
import IconNotification from "../Icons/IconNotification.vue";
import NotificationHeader from "./NotificationHeader.vue";

export default {
  name: "Header",
  components: {
    SearchInput,
    IconNotification,
    NotificationHeader
  },
  setup() {
    const sidebar = useSidebarStore()

    return {
      sidebar
    };
  },
};
</script>