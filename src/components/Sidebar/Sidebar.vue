<template>
  <div class="md:w-[250px] relative z-50">
    <div
      class="fixed top-16 bottom-0 flex flex-col justify-between w-[250px] bg-white z-50 overflow-y-auto py-2 transition-all ease-in-out duration-300"
      :class="
        sidebar.isOpen
          ? 'translate-x-0'
          : '-translate-x-[101%] md:translate-x-0'
      "
    >
      <!-- menu area -->
      <div class="w-full">
        <nav>
          <ul class="flex flex-col gap-2 px-3">
            <li v-for="(menuItem, index) in menuItems" :key="index">
              <!-- primary items -->
              <router-link
                :to="menuItem.primaryItem.link"
                class="flex justify-between items-center w-full px-3 py-2 rounded-xl transition hover:bg-gray-100"
                @click="handleMenuItemClick(index)"
              >
                <div class="flex gap-3">
                  <!-- icon -->
                  <component
                    :is="menuItem.primaryItem.icon"
                    :color="
                      isActiveMenuItem(menuItem.primaryItem.link)
                        ? '#1C64F2'
                        : '#111826'
                    "
                  />

                  <!-- link name -->
                  <span
                    class="font-medium max-w-[130px]"
                    :class="
                      isActiveMenuItem(menuItem.primaryItem.link)
                        ? 'text-primary-light'
                        : 'text-text-verydark'
                    "
                  >
                    {{ menuItem.primaryItem.title }}
                  </span>
                </div>

                <!-- arrow icon -->
                <div
                  v-if="menuItem.secondaryItems"
                  class="transition"
                  :class="menuIsOpen(index) ? 'rotate-0' : 'rotate-180'"
                >
                  <IconArrow />
                </div>

                <!-- tag messages -->
                <div v-if="menuItem.primaryItem.id === 'mensagens' && user.amountMessages > 0">
                  <Tag :text="user.amountMessages > 0 ? user.amountMessages.toString() : ''" color="red" />
                </div>
              </router-link>

              <!-- secondary items -->
              <ul
                v-if="menuItem.secondaryItems"
                class="mt-3 ml-10 flex flex-col gap-4 overflow-y-hidden transition-all"
                :class="menuIsOpen(index) ? 'max-h-[500px]' : 'max-h-0'"
              >
                <li
                  v-for="(secondaryItem, index) in menuItem.secondaryItems"
                  :key="index"
                >
                  <router-link
                    :to="secondaryItem.link"
                    class="transition hover:opacity-90"
                    :id="`link-${secondaryItem.id}`"
                    @click="handleMenuItemClick(secondaryItem.link)"
                  >
                    <span
                      :class="
                        isActiveMenuItem(secondaryItem.link)
                          ? 'text-primary-light'
                          : 'text-text-verydark'
                      "
                      >{{ secondaryItem.title }}</span
                    >
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>

          <!-- divider -->
          <div class="h-[1px] w-full bg-gray-200 my-5"></div>

          <!-- other links -->
          <ul class="flex flex-col gap-2 px-3">
            <li v-for="(otherLink, index) in otherLinks" :key="index">
              <!-- primary items -->
              <router-link
                :to="otherLink.link"
                class="flex justify-between items-center w-full px-3 py-2 rounded-xl transition hover:bg-gray-100"
                @click="handleMenuItemClick(otherLink.link)"
              >
                <div class="flex gap-3">
                  <!-- icon -->
                  <component
                    :is="otherLink.icon"
                    :color="
                      isActiveMenuItem(otherLink.link) ? '#1C64F2' : '#111827'
                    "
                  />

                  <!-- link name -->
                  <span
                    class="font-medium max-w-[130px]"
                    :class="
                      isActiveMenuItem(otherLink.link)
                        ? 'text-primary-light'
                        : 'text-text-verydark'
                    "
                  >
                    {{ otherLink.title }}
                  </span>
                </div>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>

      <!-- sidebar footer -->
      <div class="p-3 flex justify-center gap-6">
        <button class="transition hover:scale-105">
          <IconSettings />
        </button>
        <button class="transition hover:scale-105">
          <IconGlobo />
        </button>
        <button class="transition hover:scale-105">
          <IconConfig />
        </button>
      </div>
    </div>

    <!-- bg sidebar to close -->
    <div
      v-if="sidebar.isOpen"
      class="fixed w-screen h-screen top-0 left-0 bg-transparent z-30"
      @click="sidebar.close"
    ></div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSidebarStore } from "../../stores/SidebarStore";
import Tag from "../Tag/Tag.vue";
import { useUserStore } from "../../stores/UserStore";
import { useRoute } from "vue-router";

//icons
import IconChartPie from "../Icons/IconChartPie.vue";
import IconArrow from "../Icons/IconArrow.vue";
import IconReport from "../Icons/IconReport.vue";
import IconAdvisor from "../Icons/IconAdvisor.vue";
import IconMessages from "../Icons/IconMessages.vue";
import IconHelp from "../Icons/IconHelp.vue";
import IconSettings from "../Icons/IconSettings.vue";
import IconGlobo from "../Icons/IconGlobo.vue";
import IconConfig from "../Icons/IconConfig.vue";

export default {
  name: "Sidebar",
  components: {
    IconChartPie,
    IconArrow,
    IconReport,
    IconAdvisor,
    IconMessages,
    IconHelp,
    IconSettings,
    IconGlobo,
    IconConfig,
    Tag,
  },
  setup() {
    const user = useUserStore();
    const route = useRoute();
    const sidebar = useSidebarStore();
    const sidebarIsOpen = ref(false);
    const openMenuItems = ref([]);
    const menuItems = ref([
      {
        primaryItem: {
          title: "Dashboard",
          link: "/",
          icon: "IconChartPie",
          id: "dashboard",
        },
      },
      {
        primaryItem: {
          title: "Advisor",
          link: "",
          icon: "IconAdvisor",
          id: "advisor",
        },
        secondaryItems: [
          {
            title: "Lista de clientes",
            link: "/lista-clientes",
            id: "lista-clientes",
          },
          {
            title: "Cobrança",
            link: "/cobranca",
            id: "cobranca",
          },
          {
            title: "Estatísticas",
            link: "/estatisticas",
            id: "estatisticas",
          },
        ],
      },
      {
        primaryItem: {
          title: "Mensagens",
          link: "/mensagens",
          icon: "IconMessages",
          id: "mensagens",
        },
      },
    ]);

    const otherLinks = ref([
      {
        title: "Ajuda",
        link: "/ajuda",
        icon: "IconHelp",
        id: "ajuda",
      },
    ]);

    const menuIsOpen = (index) => {
      return openMenuItems.value && openMenuItems.value.includes(index);
    };

    const handleMenuItemClick = (index) => {
      sidebar.close();

      if (openMenuItems.value.includes(index)) {
        openMenuItems.value = openMenuItems.value.filter(
          (item) => item !== index
        );
      } else {
        openMenuItems.value.push(index);
      }
    };

    const toogleSidebar = () => {
      sidebarIsOpen.value = !sidebarIsOpen.value;
    };

    const isActiveMenuItem = (menuLink) => {
      return route.path === menuLink;
    };

    return {
      route,
      sidebarIsOpen,
      toogleSidebar,
      menuItems,
      otherLinks,
      handleMenuItemClick,
      isActiveMenuItem,
      sidebar,
      user,
      menuIsOpen,
    };
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #2563eb;
  box-shadow: 0 0 10px #ffffff;
}

::-webkit-scrollbar-track {
  background-color: #b6b6b6;
}
</style>
