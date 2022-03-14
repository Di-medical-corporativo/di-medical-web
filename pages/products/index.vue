<template>
  <div class="product__list">
    <BannerComponent/>
    <div class="products__list__content">
        <SearchComponent/>
				<span class="products__list__content_total">
					12 Productos totales
				</span>
        <div class="cards">
            <CardComponent v-for="c in 15" :key="c"/>
        </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  layout: 'main',
  components: {
    BannerComponent: defineAsyncComponent(() => import('../../components/products/banner.vue')),
    SearchComponent: defineAsyncComponent(() => import('../../components/products/search.vue')),
    CardComponent: defineAsyncComponent(() => import('../../components/products/product.vue'))
  }
})
</script>

<style>

</style>