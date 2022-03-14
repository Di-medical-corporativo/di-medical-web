<template>
  <div class="contact">
    <HeroImageComponent image="contact" title="Contacto"/>
	  <FormContactComponent/>
    <OfficesContactComponent/>
    <FAQComponent/>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  layout: 'main',
  components: {
    HeroImageComponent: defineAsyncComponent(() => import('../../components/heroImage.vue')),
		FormContactComponent: defineAsyncComponent(() => import('../../components/contact/formContact.vue')),
    OfficesContactComponent: defineAsyncComponent(() => import('../../components/contact/offices.vue')),
    FAQComponent: defineAsyncComponent(() => import('../../components/contact/QA.vue'))
  }
})
</script>

<style>

</style>