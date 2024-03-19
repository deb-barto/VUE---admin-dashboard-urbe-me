<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    viewBox="0 0 16 9"
    fill="none"
  >
    <path
      d="M1.58334 7.75004L8.00001 1.33337L14.4167 7.75004"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: "IconArrow",
  props: {
    color: {
      type: String,
      default: "#111827",
    },
    size: {
      type: Number,
      default: 16,
    },
  },
};
</script>

<style></style>
