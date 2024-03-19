<template>
  <div class="flex flex-col p-5 bg-white rounded-2xl shadow-md w-full min-h-[118px]">
    <!-- Campos de Filtro -->
    <div class="mb-4 flex justify-between">
      <input v-model="filterName" placeholder="Filtrar por nome" class="input bg-white rounded-2xl shadow px-4" />
      <div>
        <select v-model="filterBroker" class="select px-4">
          <option value="">Todas as Corretoras</option>
          <option value="A">Corretora A</option>
          <option value="B">Corretora B</option>
          <option value="C">Corretora C</option>
        </select>
        <button class="bg-green-500 text-white mx-4 px-4 py-2 rounded" @click="showAddClientModal">Adicionar
          Cliente</button>
      </div>
    </div>
    <ModalBase :isActive="modalIsActive" @closeModalClick="closeModal">
      <template #header>
        <h3 class="text-lg font-semibold">Adicionar Novo Cliente</h3>
      </template>
      <template #body class="p-10 rounded-2x1">
        <form @submit.prevent="addClient" class="flex flex-col p-20 mb-4">
          <input class="block text-sm font-medium text-gray-700 m-5 p-5 border border-gray-300 rounded-md"  type="text" v-model="newClient.name" placeholder="Nome do Cliente" required>
          <select class="mt-1 block m-5 p-5 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" v-model="newClient.broker"  placeholder="Nome do Cliente" required>
            <option value="A">Corretora A</option>
            <option value="B">Corretora B</option>
            <option value="C">Corretora C</option>
          </select>
          <button type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Salvar</button>
        </form>
      </template>
    </ModalBase>
    <el-table :data="paginatedData" stripe style="width: 100%" :header-cell-style="{ background: '#F9FAFB' }">
      <el-table-column prop="name" label="Nome do Cliente" />
      <el-table-column prop="broker" label="Corretora" />
      <el-table-column prop="total" label="Valor Total" />
      <el-table-column width="100">
        <template template #default="scope">
          <el-button type="danger" class="pi pi-trash" circle @click="showDeleteConfirmation(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="justify-center">
      <el-pagination class="justify-center" layout="prev, pager, next" :total="filteredClients.length"
        :page-size="pageSize" @current-change="updatePaginatedData" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { api } from '../../services/api';
import CardDefault from '../../components/CardDefault/CardDefault.vue';
import ModalBase from '../../components/ModalBase/index.vue';
import 'primeicons/primeicons.css'

export default {
  components: {
    CardDefault,
    ModalBase,
  },
  setup() {
    const modalIsActive = ref(false);
    const newClient = ref({ name: '', broker: '' });
    const clients = ref([]);
    const filterName = ref('');
    const filterBroker = ref('');
    const pageSize = ref(15);
    const currentPage = ref(1);

    const showAddClientModal = () => {
      modalIsActive.value = true;
    };

    const closeModal = () => {
      modalIsActive.value = false;
    };

    const addClient = async () => {
  try {
    const response = await api.post('/clients/', newClient.value);
    const addedClient = response.data;
    clients.value.push(addedClient);
    newClient.value = { name: '', broker: '' };
    closeModal();
    fetchClients();
  } catch (error) {
    console.error('Erro ao adicionar cliente:', error);
  }
};

    const fetchClients = async () => {
      try {
        const response = await api.get('/clients/');
        clients.value = response.data.map(client => ({
          ...client,
          total: client.transactions.reduce((acc, transaction) => acc + (transaction.transaction_type === 'Aporte' ? transaction.value : -transaction.value), 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        }));
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    };

    onMounted(fetchClients);

    const filteredClients = computed(() => clients.value.filter(client => client.name.toLowerCase().includes(filterName.value.toLowerCase()) && (filterBroker.value === '' || client.broker === filterBroker.value)));

    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * pageSize.value;
      const end = start + pageSize.value;
      return filteredClients.value.slice(start, end);
    });

    const updatePaginatedData = (newPage) => {
      currentPage.value = newPage;
    };

    return {
      filterName,
      filterBroker,
      filteredClients,
      pageSize,
      paginatedData,
      updatePaginatedData,
      modalIsActive,
      showAddClientModal,
      newClient,
      addClient,
      closeModal
    };
  },
};
</script>