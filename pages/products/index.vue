<template>
  <div class="product__list">
    <BannerComponent/>
    <div class="products__list__content">
        <SearchComponent/>
				<span class="products__list__content_total">
					{{products.length}} producto(s)
				</span>
        <div class="cards" v-if="!loading && products.length > 0">
            <CardComponent v-for="p in products" :key="p.id" :product="p"/>
        </div>
        <div v-if="loading">
          <b-spinner class="m-5" label="Busy"></b-spinner>
        </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent, useMeta } from '@nuxtjs/composition-api'
import productsMeta from '../../metadata/products'
import useProducts from '../../composables/useProduct'
export default defineComponent({
  layout: 'productDetail',
  head: {},
  components: {
    BannerComponent: defineAsyncComponent(() => import('../../components/products/banner.vue')),
    SearchComponent: defineAsyncComponent(() => import('../../components/products/search.vue')),
    CardComponent: defineAsyncComponent(() => import('../../components/products/product.vue'))
  },

  setup(props) {

    useMeta(productsMeta)
  
    const { getProducts, products, loading } = useProducts()
    
    getProducts()
    return { 
      products,
      loading
    }
  }
})
</script>

<style>

</style>