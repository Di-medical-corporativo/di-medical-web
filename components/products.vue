<template>
  <div class="products__exhibition" style="{ 'flex-direction': 'row' }">
    <h1 class="products__title" data-aos="fade-right">Nuestros productos</h1>
    <div class="products__exhibition__list" v-if="!loading">
      <ProductComponent 
        v-for="( p, i ) in firstThree" 
        :key="i" 
        :product="p"
        class="product__exhibition"/>
    </div>  
    <button 
      class="products__exhibition__button"
      @click="$router.push({ name: 'products' })"
    >
      Ver más
    </button>

    <svg v-if="position === 'top'" class="wave__up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#FAFAFA" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,149.3C672,139,768,85,864,85.3C960,85,1056,139,1152,176C1248,213,1344,235,1392,245.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>
    <svg v-if="position === 'bottom'" class="wave__down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FAFAFA" fill-opacity="1" d="M0,288L120,272C240,256,480,224,720,229.3C960,235,1200,277,1320,298.7L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    <hexagonDecorationComponent class="decoration--4"/>
    <svg class="decoration--5" version="1.1" xmlns="http://www.w3.org/2000/svg" width="500" height="404" viewbox="0 0 349.8742631289132 404" style="filter: drop-shadow(rgba(255, 255, 255, 0.5) 0px 0px 10px);"><path fill="#c28400" d="M166.2768775266122 4.999999999999999Q174.9371315644566 0 183.597385602301 5L341.2140090910688 96Q349.8742631289132 101 349.8742631289132 111L349.8742631289132 293Q349.8742631289132 303 341.2140090910688 308L183.597385602301 399Q174.9371315644566 404 166.2768775266122 399L8.660254037844386 308Q0 303 0 293L0 111Q0 101 8.660254037844387 96Z"></path></svg>
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent, computed } from '@nuxtjs/composition-api'
import useProducts from '../composables/useProduct'
export default defineComponent({
    components: {
        ProductComponent: defineAsyncComponent(() => import('./products/product.vue')),
        hexagonDecorationComponent: defineAsyncComponent(() => import('./hexagonDecoration.vue'))
    },
    props: {
        position: {
            type: String,
            default: () => 'bottom'
		}
    },

    setup(props) {
      const { limitProductsResults, loading, getProducts } = useProducts()
      getProducts()
      const firstThree = computed(() => limitProductsResults(3))
      return { firstThree, loading }
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
    left: -100px;
    bottom: 100px;
    z-index: -2;
    transform: rotate(10deg);
  }

</style>
