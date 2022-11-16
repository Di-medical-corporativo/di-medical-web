<template>
  <div class="modal__slider" @click.self="closeModal" :style="showModalStyle">
    <div class="slider" v-if="isShown">
        <div class="slider__close" @click="closeModal">
          <b-icon icon="x" class="icon"></b-icon>
        </div>
        <div class="slider__main" v-if="imageList.length > 0">
          <video 
            autoplay
            muted
            v-if="imageList[counterImage].includes('mp4')" 
            class="slider__full video"
            controls
          >
          <source :src="imageList[counterImage]" type="video/mp4"/>
        </video>

          <img v-else class="slider__full" :src="imageList[counterImage]" alt="Product image">
        </div>

        <div class="slider__left__arrow" @click="counterImage--" v-if="counterImage > 0">
          <b-icon icon="arrow-left" class="icon"></b-icon>
        </div>

        <div class="slider__right__arrow" @click="counterImage++" v-if="counterImage < imageList.length - 1">
          <b-icon icon="arrow-right" class="icon"></b-icon>
        </div>

    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref, toRefs, watch } from "@nuxtjs/composition-api"

export default defineComponent({
    props: {
        isDisplayed: {
            type: Boolean
        },
        actualImageId: {
          type: Number
        },
        imageList: {
          type: Array
        }
    },
    setup(props, { emit }) {
      let isShown = toRefs(props).isDisplayed
      let counterImage = ref(0)
      counterImage.value = props.actualImageId

      const showModalStyle = computed(() => {
        return { 'top': !isShown.value ? '-100vh' : '0'  }
      })

      const closeModal = () => {
        emit('closeModal')
      }

      watch(toRefs(props).actualImageId, () => {
        counterImage.value = props.actualImageId
      })
      return {
        closeModal,
        isShown,
        counterImage,
        showModalStyle,
      }
    }
})
</script>