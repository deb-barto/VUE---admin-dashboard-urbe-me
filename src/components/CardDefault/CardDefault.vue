<template>
  <div class="flex flex-col justify-between p-5 bg-white rounded-2xl shadow-md w-full h-full min-h-[118px]">
    <!-- header -->
    <div v-if="title" class="flex items-center gap-4 text-xl font-semibold">
      <h2>{{ title }}</h2>
      <div v-if="hasIcon">
        <IconAlert />
      </div>
    </div>

    <div>
      <slot />
    </div>
  </div>
</template>

<script>
import IconAlert from "../Icons/IconAlert.vue";
export default {
  components: { IconAlert },
  props: {
    title: String,
    hasIcon: {
      type: Boolean,
      default: false,
    },
  },
  name: "CardDefault",
};
</script>

<style></style>
