<template>
  <div class="relative flex items-center">
    <label for="search-input" class="absolute left-4">
      <IconSearch />
    </label>
    <input
      v-model="searchTerm"
      @input="search"
      id="search-input"
      type="text"
      placeholder="Pesquisar"
      class="bg-gray-50 h-[45px] w-full max-w-[402px] border border-gray-200 rounded-2xl pl-[45px] placeholder:text-[#6B7280] placeholder:text-base"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import IconSearch from "../Icons/IconSearch.vue";

export default {
  name: "SearchInput",
  components: {
    IconSearch,
  },
  setup() {
    const searchTerm = ref("");

    const search = () => {
      console.log(`Buscou por ${searchTerm.value}`);
    };

    return {
      searchTerm,
      search,
    };
  },
};
</script>

<style></style>
