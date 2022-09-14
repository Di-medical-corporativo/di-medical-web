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
    HeroImageComponent: defineComponent(() => import('../../components/heroImage.vue')),
    WhoWeAreComponent: defineComponent(() => import('../../components/about/whoWeAre.vue')),
    PrinciplesComponent:defineComponent(() => import('../../components/about/misionVision.vue')), 
    TimeLineComponent: defineComponent(() => import('../../components/about/timeLine.vue')),
    SpecialtyComponent: defineComponent(() => import('../../components/about/specialty.vue')),
    PartnersComponent: defineComponent(() => import('../../components/about/partners.vue'))
  },
  setup(props) {
    useMeta(aboutMeta)
  },
})
</script>
