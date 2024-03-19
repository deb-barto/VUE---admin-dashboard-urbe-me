<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" viewBox="0 0 24 24" fill="none">
    <path d="M2.3999 12C2.3999 9.45392 3.41133 7.01213 5.21168 5.21178C7.01203 3.41143 9.45382 2.4 11.9999 2.4V12H21.5999C21.5999 14.5461 20.5885 16.9879 18.7881 18.7882C16.9878 20.5886 14.546 21.6 11.9999 21.6C9.45382 21.6 7.01203 20.5886 5.21168 18.7882C3.41133 16.9879 2.3999 14.5461 2.3999 12V12Z" :fill="color"/>
    <path d="M14.3999 2.7024C16.0603 3.13256 17.5754 3.99894 18.7882 5.21174C20.001 6.42455 20.8673 7.93965 21.2975 9.6H14.3999V2.7024Z" :fill="color"/>
    </svg>
</template>

<script>
export default {
  name: "IconChartPie",
  props: {
    color: {
      type: String,
      default: "#111827",
    },
    size: {
      type: Number,
      default: 24,
    },
  },
};
</script>

<style></style>
