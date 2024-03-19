<template>
  <cardDefault title="Carteiras por Corretora" hasIcon>
    <div class="w-full h-72">
      <v-chart class="chart" :option="option" autoresize />
    </div>
  </cardDefault>
</template>

<script>
import { ref } from 'vue';
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import { TooltipComponent, GridComponent } from "echarts/components";
import VChart from "vue-echarts";
import CardDefault from "../CardDefault/CardDefault.vue";

use([CanvasRenderer, BarChart, TooltipComponent, GridComponent]);

export default {
  components: {
    VChart,
    CardDefault,
  },
  props: {
    data: Object,
  },
  setup(props) {
    const option = ref({
      tooltip: {
        show: true,
        trigger:'item',
      },
      xAxis: {
        type: "category",
        data: props.data.labels,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: props.data.values,
          type: 'bar',
          smooth: true,
        },
      ],
    });

    return { option };
  },
};
</script>./BarChartPortfolioByBrokers.vue