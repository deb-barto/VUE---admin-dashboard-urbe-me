<template>
  <CardDefault title="Patrimônio por Corretora" hasIcon>
    <div class="w-full h-72">
      <v-chart class="chart" :option="option" autoresize />
    </div>
  </CardDefault>
</template>

<script>
import { ref } from 'vue';
import VChart from 'vue-echarts';
import CardDefault from "../CardDefault/CardDefault.vue";

export default {
  components: {
    VChart,
    CardDefault
  },
  props: {
    data: Object,
  },
  setup(props) {
    const option = ref({
      tooltip: {
        show: true,
        trigger: 'item'
      },
      yAxis: {
        type: 'category',
        data: props.data.labels,
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          show: true, 
        }
      },
      series: [
        {
          data: props.data.values.map(value => {
            const match = value.match(/\d+/g);
            return match ? parseFloat(match.join('')) : 0;
          }),
          type: 'bar',
          smooth: true,
        }
      ],
    });

    return {
      option,
    };
  },
};
</script>