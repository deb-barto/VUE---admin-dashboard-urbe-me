<template>
<div class="flex flex-col h-full min-h-screen mt-16">
    <div>
        <Header />
    </div>

    <div class="flex w-full max-w-container grow mx-auto">
        <aside>
            <Sidebar />
        </aside>

        <main class="flex flex-col w-full bg-gray-50 p-5">
            <slot />
        </main>
    </div>
</div>
</template>

<script>
import Header from '../components/Header/Header.vue';
import Sidebar from '../components/Sidebar/Sidebar.vue';
import Footer from '../components/Footer/Footer.vue';

export default {
  name: 'LoggedLayoutDefault',
  components: {
    Header, 
    Sidebar,
    Footer
  }
};
</script>
