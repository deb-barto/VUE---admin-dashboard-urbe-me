<template>
    <teleport to="body">
        <!-- overlay -->
        <div class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-75"
            v-if="isActive" @click.self="closeModal">

            <!-- content container -->
            <div class="relative flex flex-col justify-center align-center p-4 w-[50%] overflow-x-hidden bg-white h-fit min-h-[200px] max-h-[90%]"
                :class="maxWidth" v-motion-slide-bottom>
                <button @click="closeModal"
                    class="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <slot name="header"></slot>
                <slot name="body"></slot>
            </div>
        </div>
    </teleport>
</template>

<script>
export default {
    props: {
        isActive: {
            type: Boolean,
            default: false
        },
        maxWidth: {
            type: String,
            default: 'max-w-7xl'
        }
    },
    emits: ['closeModalClick'],
    setup(props, { emit }) {

        function closeModal() {
            emit('closeModalClick')
        }

        return {
            closeModal
        }
    },
}
</script>