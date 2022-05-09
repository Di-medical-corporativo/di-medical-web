<template>
  <div class="modal__slider" @click.self="closeModal" :style="showModalStyle">
    <div class="slider" v-if="show">
        <div class="slider__close" @click="closeModal">
          <b-icon icon="x" class="icon"></b-icon>
        </div>
        <div class="slider__main" v-if="images.length > 0">
          <video 
            autoplay
            muted
            v-if="images[counterImage].includes('mp4')" 
            class="slider__full video"
            controls
          >
          <source :src="images[counterImage]" type="video/mp4"/>
        </video>

          <img v-else class="slider__full" :src="images[counterImage]" alt="Product image">
        </div>

        <div class="slider__left__arrow" @click="counterImage--" v-if="counterImage > 0">
          <b-icon icon="arrow-left" class="icon"></b-icon>
        </div>

        <div class="slider__right__arrow" @click="counterImage++" v-if="counterImage < images.length - 1">
          <b-icon icon="arrow-right" class="icon"></b-icon>
        </div>

    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref, toRefs, watch } from "@nuxtjs/composition-api"

export default defineComponent({
    props: {
        showModal: {
            type: Boolean
        },
        actualImage: {
          type: Number
        },
        images: {
          type: Array
        }
    },
    setup(props, { emit }) {
      let show = toRefs(props).showModal
      let counterImage = ref(0)
      counterImage.value = props.actualImage
      const showModalStyle = computed(() => {
        return { 'top': !show.value ? '-100vh' : '0'  }
      })

      const closeModal = () => {
        emit('closeModal')
      }

      watch(toRefs(props).actualImage, () => {
        counterImage.value = props.actualImage
      })
      return {
        closeModal,
        show,
        counterImage,
        showModalStyle,
      }
    }
})
</script>