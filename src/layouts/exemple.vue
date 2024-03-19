<template>
    <div class="flex flex-col h-full min-h-screen">
      <!-- <HeaderStructure /> -->
      <div>
        <Header />
      </div>
  
      <div class="flex w-full max-w-container grow mx-auto">
        <aside>
          <Sidebar />
        </aside>
    
        <main class="flex flex-col w-full h-max xl:ml-4">
          <slot />
          <footer>
            <Footer />
          </footer>
        </main>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '~/components/Header/Header.vue';
  import HeaderStructure from '~/components/Header/HeaderStructure.vue';
  import Sidebar from '~/components/Sidebar/Sidebar.vue';
  import SidebarStructure from '~/components/Sidebar/SidebarStructure.vue';
  export default {
    components: {
      Header,
      HeaderStructure,
      Sidebar,
      SidebarStructure
    }
  }
  </script>
  
  <style scoped>
  
  </style>