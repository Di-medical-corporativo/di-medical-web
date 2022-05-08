<template>
  <div class="product__detail">
    <template v-if="!loading">
      <div class="product__detail__main">
        <div class="product__detail__section">
          <ProductPhotoComponent @showModal="activateModal" :photos="product[0].photos"/>
        </div>
        <div class="product__detail__section">
          <ProductDescComponent :product="product[0]"/>
        </div>
    </div>
    <hr class="product__detail__line">
    <div class="product__detail__recommendations" v-if="false">
      <h3 class="product__detail__recommendations__title">Te podria interesar:</h3>
      <ProductRecommendationComponent v-for="card in 2" :key="card" class="ml-3"/>
    </div>
    <ModalSliderComponent 
      v-if="!loading"
      :showModal="showModal" 
      :actualImage="actualModalImageIdx" 
      @closeModal="activateModal"
      :images="product[0].photos"
    />
    </template>
    <ProductLoaderSkeletonComponent v-else/>
  </div>
</template>

<script>
import { defineComponent, useRoute, useStore, computed, useRouter, useMeta} from "@nuxtjs/composition-api"
import { defineAsyncComponent, onMounted, ref } from "@vue/composition-api"

import useProduct from '@/composables/useProduct'
import productMeta from '../../../metadata/product'
export default defineComponent({
  layout: 'productDetail',
  head: {},
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const { getProducts, loading } = useProduct()

    const showModal = ref(false);
    const actualModalImageIdx = ref(0);
    const activateModal = (idx) => {
      showModal.value = !showModal.value
      actualModalImageIdx.value = idx;
    }

    getProducts()
    const product = computed(() => store.getters['products/getProductById'](route.value.params.id) || [])
    const productTitle = route.value.params.id.replace(/-/g, ' ');
    if(!product.value) {
      return router.push({ name: "products" })
    }

    console.log(store.getters['products/getProductById'](route.value.params.id));
      useMeta({
      title: `${productTitle.toLocaleUpperCase()} | Lo más selecto de las mejores marcas para el mercado hospitalario.`,
      meta: [
          { hid: 'description', name: 'description', content: 'Conoce nuestros productos, lo más selecto de las mejores marcas para el mercado hospitalario.' },
          { hid: 'author', name: 'author', content: 'Di-medical corporativo' },
          { hid: 'og-title', name: 'og:title', content: `${productTitle.toLocaleUpperCase()} | Lo más selecto de las mejores marcas para el mercado hospitalario.` },
          { hid: 'og-type', name: 'og:type', content: 'website' },
          { hid: 'og-url', name: 'og:url', content: `https://www.dimedicalcorporativo.mx/products/detail/${route.value.params.id}` },
          { hid: 'og-description', name: 'og:description', content: 'Conoce nuestros productos, lo más selecto de las mejores marcas para el mercado hospitalario.' },
          { hid: 'og-image', name: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/static%2FlogoCorporativo.png?alt=media&token=ca32a756-7656-4259-b5b7-921c11a0a3e8' }
        ]
    })
    

    return {
      showModal,
      activateModal,
      actualModalImageIdx,
      loading,
      product
    }
  },
  components: {
    ProductPhotoComponent: defineAsyncComponent(() => import('@/components/products/detail/photo.vue')),
    ProductDescComponent: defineAsyncComponent(() => import('@/components/products/detail/product_desc.vue')),
    ProductRecommendationComponent: defineAsyncComponent(() => import('@/components/products/product.vue')),
    ModalSliderComponent: defineAsyncComponent(() => import('@/components/products/detail/modalSlider.vue')),
    ProductLoaderSkeletonComponent: defineAsyncComponent(() => import('@/components/products/detail/loaderProduct.vue'))
  
  }
})
</script>

<style>

</style>