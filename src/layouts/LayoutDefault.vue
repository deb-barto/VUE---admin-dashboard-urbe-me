<template>
    <div class="flex flex-col justify-between bg-black w-full min-h-screen overflow-x-hidden" >
        <header>
            <Header />
        </header>
        <main class="flex flex-col flex-1 mt-[60px]">
            <slot />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
</template>

<script>
import Header from '../components/Header/Header.vue'
import Footer from '../components/Footer/Footer.vue'
export default {
    name: 'LayoutDefault',
    components: {
        Header,
        Footer
    },
    setup() {

    }

}
</script>

<style></style>../components/Header/Header.vue../components/Footer/Footer.vue