<template>
  <h1>Perfil</h1>
  <h2>{{ counter.count }}</h2>

  <button @click="counter.increment">Incrementar</button>

  <h2>{{ counter.showCount }}</h2>
</template>

<script>
import { onMounted } from 'vue'
import { useCounterStore } from '/src/stores/CounterStore.js'

export default {
    name: 'PerfilView',
    setup() {
        const counter = useCounterStore()

        onMounted(() => {
            console.log('counter', counter)
        }) 

        return {
            counter
        }

    }
}
</script>

<style>

</style>