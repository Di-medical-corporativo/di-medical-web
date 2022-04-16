<template>
    <div 
        class="stories__modal" 
        @click.self="emitCloseModal"
        :style="showModalStyle"
        >
        <div class="stories__modal__close">
            <b-icon icon="x" class="icon" @click="emitCloseModal"></b-icon>
        </div>
        <div class="modal__image">
            <div class="modal__image__next left" @click="counterImage--" v-if="counterImage > 0">
                <b-icon icon="arrow-left"></b-icon>
            </div>
            <img :src="images[counterImage].image" class="story__image" >
            <div class="modal__image__next right" @click="counterImage++" v-if="counterImage < images.length - 1">
                <b-icon icon="arrow-right"></b-icon>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, defineComponent, onBeforeMount, onMounted, ref, toRefs, watch } from "@nuxtjs/composition-api"

export default defineComponent({
    props: {
        images: {
            type: Array
        },
        idx: {
            type: Number
        },
        open: {
            type: Boolean
        }
    },

    setup(props, { emit }) {
        const closeModal = toRefs(props).open
        let counterImage = ref(0)
        counterImage.value = props.idx
        const showModalStyle = computed(() => {
            return { 'left': !closeModal.value ? '-500vw' : '0'  }
        })
        
        const emitCloseModal =() => {
            emit('closeModal')
        }

        watch(toRefs(props).idx, () => {
            counterImage.value = props.idx
        })


        return { 
            closeModal,
            showModalStyle,
            emitCloseModal,
            counterImage
        }
    }
})
</script>

<style>

</style>