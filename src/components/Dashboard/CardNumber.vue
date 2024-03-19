<template>
  <div>
    <CardDefault :title="title">
      <div v-if="data.value" class="flex justify-between">
        <span class="font-semibold">{{ data.value }}</span>
        <div>
          <Tag
            :text="data.formattedPercentage"
            :color="data.percentage >= 0 ? 'green' : 'red'"
          />
        </div>
      </div>
    </CardDefault>
  </div>
</template>

<script>
import CardDefault from "../CardDefault/CardDefault.vue";
import IconAlert from "../Icons/IconAlert.vue";
import Tag from "../Tag/Tag.vue";
export default {
  components: { IconAlert, CardDefault, Tag },
  props: {
    title: String,
    hasIcon: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: {
        value: null,
        percentage: null,
        formattedPercentage: "",
      },
    },
  },
  name: "CardNumber",
  setup() {},
};
</script>

<style></style>
