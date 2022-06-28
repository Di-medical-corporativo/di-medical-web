<template>
  <div class="contact">
    <LazyHydrate when-visible>
        <HeroImageComponent image="contact" title="Contacto"/>
    </LazyHydrate>
    
    <LazyHydrate when-visible>
	    <FormContactComponent/>
    </LazyHydrate>

    <LazyHydrate when-visible>
        <OfficesContactComponent/>
    </LazyHydrate >
    
    <LazyHydrate when-visible>
        <FAQComponent/>
    </LazyHydrate>
    
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import { defineAsyncComponent, defineComponent, useMeta } from '@nuxtjs/composition-api'
import contactMeta from '../../metadata/contact'

export default defineComponent({
  layout: 'main',
  head: {},
  components: {
    LazyHydrate,
    HeroImageComponent: defineAsyncComponent(() => import('../../components/heroImage.vue')),
	FormContactComponent: defineAsyncComponent(() => import('../../components/contact/formContact.vue')),
    OfficesContactComponent: defineAsyncComponent(() => import('../../components/contact/offices.vue')),
    FAQComponent: defineAsyncComponent(() => import('../../components/contact/QA.vue'))
  },
  setup(props) {
    useMeta(contactMeta)
  },
})
</script>
