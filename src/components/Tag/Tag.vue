<template>
  <div class="flex items-center justify-center rounded-full w-fit px-[10px] py-[4px]" :style="{ backgroundColor: bgColor }">
    <span class="text-xs" :style="{ color: textColor }">{{ text }}</span>
  </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue';

export default {
  name: "Tag",
  props: {
    color: {
      type: String,
      default: "red",
    },
    text: {
      type: String,
      default: "Tag",
    },
  },
  setup(props) {
    const textColor = ref("");
    const bgColor = ref("");

    const updateColors = () => {
      if (props.color === 'red') {
        textColor.value = '#9B1C1C';
        bgColor.value = '#FBD5D5';
      } else if (props.color === 'green') {
        textColor.value = '#03543F';
        bgColor.value = '#DEF7EC';
      }
    };

    // Atualiza as cores no momento da montagem
    onMounted(() => {
      updateColors();
    });

    // Usa watch para atualizar as cores quando props.color muda
    watch(() => props.color, () => {
      updateColors();
    });

    return {
      textColor,
      bgColor,
    };
  },
};
</script>
