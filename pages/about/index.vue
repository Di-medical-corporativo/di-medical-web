<template>
  <div class="about">
    <HeroImageComponent image="about" title="Conocenos"/>
    <WhoWeAreComponent/>
    <PrinciplesComponent/>
    <TimeLineComponent/>
    <SpecialtyComponent/>
    <ProductsComponent position="top"/>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent, useMeta } from '@nuxtjs/composition-api'
import aboutMeta from '../../metadata/about'

export default defineComponent({
  layout: 'main',
  head: {},
  components: {
    HeroImageComponent: defineAsyncComponent(() => import('../../components/heroImage.vue')),
    WhoWeAreComponent: defineAsyncComponent(() => import('../../components/about/whoWeAre.vue')),
    PrinciplesComponent:defineAsyncComponent(() => import('../../components/about/misionVision.vue')), 
    TimeLineComponent: defineAsyncComponent(() => import('../../components/about/timeLine.vue')),
    SpecialtyComponent: defineAsyncComponent(() => import('../../components/about/specialty.vue')),
    ProductsComponent: defineAsyncComponent(() => import('../../components/products.vue')),
  },
  setup(props) {
    useMeta(aboutMeta)
  },
})
</script>

<style>

</style>