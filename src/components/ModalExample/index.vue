<template>
    <ModalBase :isActive="isActive" @closeModalClick="closeModal">
        <h1>Modal Example</h1>
    </ModalBase>
</template>

<script>
import { ref } from 'vue'
import ModalBase from '../ModalBase/index.vue'

export default {
    components: {
        ModalBase
    },
    props: {
        isActive: {
            type: Boolean,
            default: false
        }
    },
    emits: ['closeModalClick'],
    setup(props, { emit }) {
        const modalIsActive = ref(false)

        function closeModal() {
            emit('closeModalClick')
        }

        return {
            modalIsActive,
            closeModal
        }
    }
}
</script>

<style></style>