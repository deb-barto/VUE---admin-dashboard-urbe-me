<template>
  <!-- define o layot a partir das rotas -->
  <component :is="route.meta.layout">
    <router-view />
  </component>
</template>

<script>
import { RouterView } from "vue-router";
import { useRouter, useRoute } from 'vue-router'
import LayoutDefault from "./layouts/LayoutDefault.vue";
import LoggedLayoutDefault from "./layouts/LoggedLayoutDefault.vue";

export default {
  components: {
    LayoutDefault,
    LoggedLayoutDefault
  },
  setup() {
    const route = useRoute()

    return {
      route,
      RouterView
    }
  }
}
</script>

<style scoped></style>
