import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    //state
    state() {
        return {
            count: 0
        }
    },

    //actions
    actions: {
        increment() {
            this.count++
        }
    },

    // getters
    getters: {
        showCount() {
            return 'O valor do count é: ' + this.count
        }
    }
})