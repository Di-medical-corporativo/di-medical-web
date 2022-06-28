<template>
  <div class="about">
    <LazyHydrate>
        <HeroImageComponent image="about" title="Conocenos"/>
    </LazyHydrate>

    <LazyHydrate when-visible>
        <WhoWeAreComponent/>
    </LazyHydrate>
    
    <LazyHydrate when-visible>
        <PrinciplesComponent/>
    </LazyHydrate>
    
    <LazyHydrate when-visible>
        <TimeLineComponent/>
    </LazyHydrate>

    <LazyHydrate when-visible>
        <SpecialtyComponent/>
    </LazyHydrate>

    <LazyHydrate when-visible>
        <PartnersComponent/>
    </LazyHydrate>

  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import { defineAsyncComponent, defineComponent, useMeta } from '@nuxtjs/composition-api'
import aboutMeta from '../../metadata/about'

export default defineComponent({
  layout: 'main',
  head: {},
  components: {
    LazyHydrate,
    HeroImageComponent: defineAsyncComponent(() => import('../../components/heroImage.vue')),
    WhoWeAreComponent: defineAsyncComponent(() => import('../../components/about/whoWeAre.vue')),
    PrinciplesComponent:defineAsyncComponent(() => import('../../components/about/misionVision.vue')), 
    TimeLineComponent: defineAsyncComponent(() => import('../../components/about/timeLine.vue')),
    SpecialtyComponent: defineAsyncComponent(() => import('../../components/about/specialty.vue')),
    PartnersComponent: defineAsyncComponent(() => import('../../components/about/partners.vue'))
  },
  setup(props) {
    useMeta(aboutMeta)
  },
})
</script>
