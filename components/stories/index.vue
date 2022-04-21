<template>
  <div class="stories" >
    <div class="stories__list" :style="closeStyle" v-if="stories.length > 0">
      <div class="stories__list__close" @click="closeList = !closeList">
        <b-icon :icon="closeIcon"></b-icon>
      </div>
      <div 
        class="story" 
        v-for="(s, idx) in stories" 
        :key="idx" 
        :style="{ 'backgroundImage': `url(${s.url})` }"
        @click="changeCurrentImage(idx)"
        >
      </div>
    </div>


    <ModalSliderComponent :idx="currentImage" :open="toggleModal" @closeModal="closeModal"/>
  </div>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, ref, useStore } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const closeList = ref(true)
    const toggleModal = ref(false) 
    const currentImage = ref(0)
    const store = useStore()

    const closeModal = () => {
      toggleModal.value = !toggleModal.value
    }

    const changeCurrentImage = (idx) => {
      toggleModal.value = !toggleModal.value
      currentImage.value = idx
    }

    const getStories = async () => {
        await store.dispatch('stories/getStories')
    }
    getStories()


    const closeIcon = computed(() => {
      return closeList.value === true ? 'arrow-bar-left': 'x'
    })

    const closeStyle = computed(() => {
      return { 'right' : closeList.value ? '-250px' : '-5px' }
    })

    return { 
      closeList,
      stories: computed(() => store.getters['stories/getStories']),
      closeIcon,
      closeStyle,
      toggleModal,
      closeModal,
      changeCurrentImage,
      currentImage
    }
  },

  components: {
    ModalSliderComponent: defineAsyncComponent(() => import('./modalStories.vue'))
  }
})
</script>

<style>

</style>