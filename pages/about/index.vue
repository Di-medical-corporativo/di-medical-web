<template>
  <div class="about">
    <HeroImageComponent image="about" title="Conocenos"/>
    <WhoWeAreComponent/>
    <PrinciplesComponent/>
    <TimeLineComponent/>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  layout: 'main',
  components: {
    HeroImageComponent: defineAsyncComponent(() => import('../../components/heroImage.vue')),
    WhoWeAreComponent: defineAsyncComponent(() => import('../../components/about/whoWeAre.vue')),
    PrinciplesComponent:defineAsyncComponent(() => import('../../components/about/misionVision.vue')), 
    TimeLineComponent: defineAsyncComponent(() => import('../../components/about/timeLine.vue'))    
  }
})
</script>

<style>

</style>