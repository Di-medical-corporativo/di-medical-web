<template>
  <div class="product__detail">
    <template v-if="!isLoading">
      <div class="product__detail__main">
        <div class="product__detail__section">
          <ProductPhotoComponent 
            @showModal="activateModal" 
            :photos="product[0].photos"/>
        </div>
        <div class="product__detail__section">
          <ProductDescComponent :product="product[0]"/>
        </div>
    </div>
    <hr class="product__detail__line">
    <div class="product__detail__recommendations" v-if="recommendedProducts.length > 0">
      <h3 class="product__detail__recommendations__title">Te podria interesar:</h3>
      <ProductRecommendationComponent 
        v-for="card in recommendedProducts" 
        :key="card.id" :product="card" 
        class="ml-3 product__recommendation"
        />
    </div>
    <ModalSliderComponent 
      v-if="!isLoading"
      :isDisplayed="showModal" 
      :actualImageId="actualModalImageIdx" 
      @closeModal="activateModal"
      :imageList="product[0].photos"
    />
    </template>
    <ProductLoaderSkeletonComponent v-else/>
  </div>
</template>

<script>
import { defineComponent, useRoute, useRouter, useMeta} from "@nuxtjs/composition-api"
import { defineAsyncComponent, ref } from "@vue/composition-api"

import useProduct from '@/composables/useProduct'

export default defineComponent({
  layout: 'productDetail',
  head: {},
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { getProductByName, getRecommendedProducts } = useProduct()

    const showModal = ref(false);
    const product = ref([
      {
        title: '',
        photos: [],
        desc: ''
      }
    ])
    const isLoading = ref(false);
    const recommendedProducts = ref([])
    const actualModalImageIdx = ref(0);
    const productTitle = route.value.params.id.replace(/-/g, ' ')

    const activateModal = (idx) => {
      showModal.value = !showModal.value
      actualModalImageIdx.value = idx
    }

    const getProduct = async () => {
        isLoading.value = true
        try {
            const productByName = await getProductByName(productTitle)
            if(!productByName) {
                return router.push({ name: "products" })
            }
            product.value = productByName;
            recommendedProducts.value = await getRecommendedProducts(product.value[0].id)
            isLoading.value = false;
        } catch (error) {
            return router.push({ name: "products" })
        }
      
    }

    getProduct()
    useMeta({
      title: productTitle.toUpperCase() + ' | Lo más selecto de las mejores marcas para el mercado hospitalario.',
      meta: [
          { hid: 'description', name: 'description', content: 'Conoce nuestros productos, lo más selecto de las mejores marcas para el mercado hospitalario.'},
          { hid: 'author', name: 'author', content: 'Di medical corporativo' },
          { hid: 'og-title', name: 'og:title', content: `${productTitle.toUpperCase()} | Lo más selecto de las mejores marcas para el mercado hospitalario.` },
          { hid: 'og-type', name: 'og:type', content: 'website' },
          { hid: 'og-url', name: 'og:url', content: `https://www.dimedicalcorporativo.mx/products/detail/${route.value.params.id}` },
          { hid: 'og-description', name: 'og:description', content: product.value[0].title },
          { hid: 'og-image', name: 'og:image', content: product.value[0].photos[0] }
        ]
    })

    return {
      showModal,
      activateModal,
      actualModalImageIdx,
      isLoading,
      product,
      recommendedProducts
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