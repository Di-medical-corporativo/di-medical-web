<template>
  <div class="product__list">
    <BannerComponent/>
    <div class="products__list__content">
        <SearchComponent @search="getTerm"/>
				<span class="products__list__content_total">
					{{products.length}} producto(s)
				</span>
        <div class="cards" v-if="!loading && products.length > 0">
            <CardComponent v-for="p in productsList" :key="p.id" :product="p"/>
        </div>
        <div v-if="loading">
          <b-spinner class="m-5" label="Busy"></b-spinner>
        </div>
    </div>
  </div>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, ref, useMeta } from '@nuxtjs/composition-api'
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

    const term = ref('')
    
    const getTerm = (t) => {
      term.value = t
    }


    const productsList = computed(() => {
      if(!term.value) {
        return products.value
      } else {
        return products.value.filter(p => 
          p.title.toLowerCase().includes(term.value.toLocaleLowerCase())
          || 
          p.code.includes(term.value.toLocaleLowerCase())
          ||
          p.brand.toLowerCase().includes(term.value.toLocaleLowerCase())
          ||
          p.description.toLowerCase().includes(term.value.toLocaleLowerCase())
          )
      }
    })


    getProducts()
    return { 
      products,
      loading,
      productsList,
      getTerm
    }
  }
})
</script>

<style>

</style>