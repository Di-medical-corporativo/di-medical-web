<template>
  <div class="product__detail">
		<div class="product__detail__main" v-if="!loading">
      <div class="product__detail__section">
        <ProductPhotoComponent @showModal="activateModal" :photos="product[0].photos"/>
      </div>
    <div class="product__detail__section">
      <ProductDescComponent :product="product[0]"/>
    </div>
    </div>
    <hr class="product__detail__line">
    <div class="product__detail__recommendations">
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
  </div>
</template>

<script>
import { defineComponent, useRoute, useStore, computed} from "@nuxtjs/composition-api"
import { defineAsyncComponent, ref } from "@vue/composition-api"

import useProduct from '@/composables/useProduct'

export default defineComponent({
  layout: 'productDetail',
  setup() {
    const route = useRoute()
    const store = useStore()
    const { getProducts, loading } = useProduct()

    const showModal = ref(false);
    const actualModalImageIdx = ref(0);
    const activateModal = (idx) => {
      showModal.value = !showModal.value
      actualModalImageIdx.value = idx;
    }

    getProducts()

    return {
      showModal,
      activateModal,
      actualModalImageIdx,
      loading,
      product: computed(() => store.getters['products/getProductById'](route.value.params.id) || [])
    }
  },
  components: {
    ProductPhotoComponent: defineAsyncComponent(() => import('@/components/products/detail/photo.vue')),
    ProductDescComponent: defineAsyncComponent(() => import('@/components/products/detail/product_desc.vue')),
    ProductRecommendationComponent: defineAsyncComponent(() => import('@/components/products/detail/product_recommendations.vue')),
    ModalSliderComponent: defineAsyncComponent(() => import('@/components/products/detail/modalSlider.vue'))
  }
})
</script>

<style>

</style>