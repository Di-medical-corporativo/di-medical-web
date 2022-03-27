<template>
  <div class="product__detail">
		<div class="product__detail__main">
      <div class="product__detail__section">
        <ProductPhotoComponent @showModal="activateModal"/>
      </div>
    <div class="product__detail__section">
      <ProductDescComponent/>
    </div>
    </div>
    <hr class="product__detail__line">
    <div class="product__detail__recommendations">
      <h3 class="product__detail__recommendations__title">Te podria interesar:</h3>
      <ProductRecommendationComponent v-for="card in 2" :key="card" class="ml-3"/>
    </div>
    <ModalSliderComponent :showModal="showModal" :actualImage="actualModalImageIdx" @closeModal="activateModal"/>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api"
import { defineAsyncComponent, ref } from "@vue/composition-api"

export default defineComponent({
  layout: 'main',
  setup() {
    let showModal = ref(false);
    let actualModalImageIdx = ref(0);
    let activateModal = (idx) => {
      showModal.value = !showModal.value
      actualModalImageIdx.value = idx;
    }
    return {
      showModal,
      activateModal,
      actualModalImageIdx
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