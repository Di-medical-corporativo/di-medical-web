<template>
  <div class="about">
    <HeroImageComponent image="about" title="Conocenos"/>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  layout: 'main',
  components: {
    HeroImageComponent: defineAsyncComponent(() => import('../../components/heroImage.vue'))
  }
})
</script>

<style>

</style>