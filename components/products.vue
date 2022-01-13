<template>
  <div class="products">
    <h1 class="products__title" data-aos="fade-right">Nuestros productos:</h1>
    <div class="products__list">
        <ProductComponent v-for="i in 3" :key="i"/>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FAFAFA" fill-opacity="1" d="M0,288L120,272C240,256,480,224,720,229.3C960,235,1200,277,1320,298.7L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    <button class="products__button">Ver más</button>
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from '@nuxtjs/composition-api'
export default defineComponent({
    components: {
        ProductComponent: defineAsyncComponent(() => import('./product.vue'))
    }
})
</script>

<style>

</style>