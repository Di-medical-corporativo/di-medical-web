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
    HeroImageComponent: defineComponent(() => import('../../components/heroImage.vue')),
	FormContactComponent: defineComponent(() => import('../../components/contact/formContact.vue')),
    OfficesContactComponent: defineComponent(() => import('../../components/contact/offices.vue')),
    FAQComponent: defineComponent(() => import('../../components/contact/QA.vue'))
  },
  setup(props) {
    useMeta(contactMeta)
  },
})
</script>
