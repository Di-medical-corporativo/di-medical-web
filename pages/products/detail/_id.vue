<template>
  <div class="product__detail">
		<div class="product__detail__section">
      <ProductPhotoComponent/>
    </div>
    <div class="product__detail__section">
   
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api"
import { defineAsyncComponent } from "@vue/composition-api"

export default defineComponent({
  layout: 'main',

  components: {
    ProductPhotoComponent: defineAsyncComponent(() => import('../../../components/products/detail/photo.vue'))
  }
})
</script>

<style>

</style>