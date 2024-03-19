<template>
  <CardDefault title="Evolução de Patrimônio Sob Custódia" hasIcon>
    <div class="h-[450px]">
      <v-chart class="chart" :option="option" autoresize width="100%" />
    </div>
  </CardDefault>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import { TooltipComponent, GridComponent } from "echarts/components";
import VChart from "vue-echarts";
import { ref, watchEffect } from "vue";
import CardDefault from "../CardDefault/CardDefault.vue";

use([CanvasRenderer, LineChart, TooltipComponent, GridComponent]);

export default {
  components: {
    VChart,
    CardDefault,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const option = ref({});

    watchEffect(() => {
      option.value = {
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          data: props.data.labels,
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} R$',
          },
        },
        series: [
          {
            data: props.data.values,
            type: 'line',
            smooth: true,
            areaStyle: {},
          },
        ],
      };
    });

    return {
      option,
    };
  },
};
</script>