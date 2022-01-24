<template>
  <div class="products">
    <h1 class="products__title" data-aos="fade-right">Nuestros productos:</h1>
    <div class="products__list">
        <ProductComponent v-for="i in 3" :key="i"/>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FAFAFA" fill-opacity="1" d="M0,288L120,272C240,256,480,224,720,229.3C960,235,1200,277,1320,298.7L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    <button class="products__button">Ver más</button>
    <hexagonDecorationComponent class="decoration--4"/>
    <hexagonDecorationComponent class="decoration--5"/>
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from '@nuxtjs/composition-api'
export default defineComponent({
    components: {
        ProductComponent: defineAsyncComponent(() => import('./product.vue')),
        hexagonDecorationComponent: defineAsyncComponent(() => import('./hexagonDecoration.vue'))
    }
})
</script>

<style lang="scss" scoped>
  .decoration--4 {
    position: absolute;
    right: -80px;
    top: 50px;
    z-index: -1;
    transform: rotate(45deg);
  }

  .decoration--5 {
    position: absolute;
    left: -10px;
    bottom: 100px;
    z-index: -2;
    transform: rotate(300deg);
  }

</style>