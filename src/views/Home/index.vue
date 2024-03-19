<template>
  <div class="flex flex-wrap gap-5" v-loading="loading">
    <!-- Cards de números -->
    <div v-if="totalClients" class="flex-1 min-w-[200px]">
      <CardNumber title="Clientes" :data="{ value: totalClients }" />
    </div>
    <div v-if="totalClients" class="flex-1 min-w-[200px]">
      <CardNumber title="Patrimônio Sob Custódia" :data="{ value: totalEquity }" />
    </div>
    <div v-if="totalClients" class="flex-1 min-w-[200px]">
      <CardNumber title="Patrimônio Médio" :data="{ value: averageEquity }" />
    </div>
    <div class="flex flex-wrap gap-5 w-full">
      <LineChartEquityHistory :data="equityHistoryData" />
    </div>
    <div class="flex flex-wrap gap-5 w-full">
      <div v-if="portfolioByBrokersData.values.length > 0" class="flex-1 min-w-[200px]">
        <ChartPortfolioByBrokers :data="portfolioByBrokersData" />
      </div>
      <div v-if="equityByBrokerData.values.length > 0" class="flex-1 min-w-[200px]">
        <ChartequityByBroker :data="equityByBrokerData" />
      </div>
    </div>

  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { api } from '../../services/api';
import CardNumber from '../../components/Dashboard/CardNumber.vue';
import LineChartEquityHistory from '../../components/Dashboard/LineChartEquityHistory.vue';
import ChartPortfolioByBrokers from "../../components/Dashboard/ChartPortfolioByBrokers.vue";
import ChartequityByBroker from '../../components/Dashboard/ChartequityByBroker.vue';

export default {
  components: {
    CardNumber,
    LineChartEquityHistory,
    ChartPortfolioByBrokers,
    ChartequityByBroker,
  },
  setup() {
    const loading = ref(false);
    const totalClients = ref(0);
    const totalEquity = ref('R$ 0');
    const averageEquity = ref('R$ 0');
    const equityHistoryData = ref({ labels: [], values: [] });
    const portfolioByBrokersData = ref({ labels: [], values: [] });
    const equityByBrokerData = ref({ labels: [], values: [] });

    function processPortfolioByBrokers(clients) {
      const brokerCount = clients.reduce((acc, client) => {
        const { broker } = client;
        acc[broker] = (acc[broker] || 0) + 1;
        return acc;
      }, {});

      const labels = Object.keys(brokerCount);
      const values = Object.values(brokerCount);
      return { labels, values };
    }

    const formatCurrency = (value) => {
      return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    const fetchData = async () => {
      loading.value = true;
      try {
        const [advisorSummaryResp, clientsResp, transactionsResp] = await Promise.all([
          api.get('/advisor_summary/'),
          api.get('/clients/'),
          api.get('/transactions/')
        ]);

        const clientsData = clientsResp.data
        totalClients.value = clientsResp.data.length;
        totalEquity.value = formatCurrency(advisorSummaryResp.data.total_equity);
        averageEquity.value = formatCurrency(advisorSummaryResp.data.average_equity);

        // Processa dados para o gráfico (exemplo simplificado)
        equityHistoryData.value = {
          labels: transactionsResp.data.map(t => t.date),
          values: transactionsResp.data.map(t => t.value)
        };

        const processedBrokerData = processPortfolioByBrokers(clientsResp.data);
        portfolioByBrokersData.value = processedBrokerData;


        const equityByBroker = clientsData.reduce((acc, client) => {
          acc[client.broker] = acc[client.broker] || 0 + client.total; // Certifique-se de que 'total' reflete corretamente o valor desejado
          return acc;
        }, {});

        const labels = Object.keys(equityByBroker);
        const values = Object.values(equityByBroker).map(value => formatCurrency(value));

        equityByBrokerData.value = { labels, values };

      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      } finally {
        loading.value = false;
      }
    };
    onMounted(fetchData);

    return {
      loading,
      totalClients,
      totalEquity,
      averageEquity,
      equityHistoryData,
      portfolioByBrokersData,
      equityByBrokerData,
    };
  },
};
</script>../../components/Dashboard/ChartEquityByBroker.vue