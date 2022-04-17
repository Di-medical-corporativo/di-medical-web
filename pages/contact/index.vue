<template>
  <div class="contact">
    <HeroImageComponent image="contact" title="Contacto"/>
	  <FormContactComponent/>
    <OfficesContactComponent/>
    <FAQComponent/>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent, useMeta } from '@nuxtjs/composition-api'
import contactMeta from '../../metadata/contact'

export default defineComponent({
  layout: 'main',
  head: {},
  components: {
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

<style>

</style>