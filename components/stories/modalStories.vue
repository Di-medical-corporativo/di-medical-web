<template>
    <div 
        class="stories__modal" 
        @click.self="emitCloseModal"
        :style="showModalStyle"
        >
        <div class="stories__modal__close">
            <b-icon icon="x" class="icon" @click="emitCloseModal"></b-icon>
        </div>
        <div class="modal__image" v-if="stories.length > 0">
            <div class="modal__image__next left" @click="counterImage--" v-if="counterImage > 0">
                <b-icon icon="arrow-left"></b-icon>
            </div>
            <img :src="stories[counterImage].url" class="story__image" >
            <div class="modal__image__next right" @click="counterImage++" v-if="counterImage < stories.length - 1">
                <b-icon icon="arrow-right"></b-icon>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, defineComponent, ref, toRefs, useStore, watch } from "@nuxtjs/composition-api"

export default defineComponent({
    props: {
        idx: {
            type: Number,
            default: () => 0
        },
        open: {
            type: Boolean
        }
    },

    setup(props, { emit }) {
        const store = useStore()

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
            counterImage,
            stories: computed(() => store.getters['stories/getStories'] || []),
        }
    }
})
</script>

<style>

</style>