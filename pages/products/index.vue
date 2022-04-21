<template>
  <div class="product__list">
    <BannerComponent/>
    <div class="products__list__content">
        <SearchComponent/>
				<span class="products__list__content_total">
					12 productos
				</span>
        <div class="cards">
            <CardComponent v-for="(p, idx) in products" :key="idx" :product="p"/>
        </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent, onMounted, ref, useMeta, useStore } from '@nuxtjs/composition-api'
import productsMeta from '../../metadata/products'
export default defineComponent({
  layout: 'productDetail',
  head: {},
  components: {
    BannerComponent: defineAsyncComponent(() => import('../../components/products/banner.vue')),
    SearchComponent: defineAsyncComponent(() => import('../../components/products/search.vue')),
    CardComponent: defineAsyncComponent(() => import('../../components/products/product.vue'))
  },

  setup(props) {

    const store = useStore()
    useMeta(productsMeta)
  
    const products = ref([
      {
        id: '1',
        name: 'Product 1',
        price: '12000',
        date: new Date(),
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos',
        brand: 'Product brand',
        code: 'Product-123',
        images: [
        'https://media.istockphoto.com/photos/pair-of-stylish-sneakers-isolated-on-white-background-white-casual-picture-id1248566148?k=20&m=1248566148&s=170667a&w=0&h=Lom1xUV8pfz2kFmzepcEzn52mlEzWj5d2TMDFKlhOsc=', 
        'https://flexi.shoes/blog/wp-content/uploads/sites/7/2018/06/sneaker-clasico-blanco.png', 
        'https://rukminim2.flixcart.com/image/714/857/jcrz6vk0/shoe/g/w/t/ds-1503-10-d-sneakerz-white-original-imafftryhbku8nus.jpeg?q=50', 
        'https://media.istockphoto.com/photos/one-white-sneaker-and-floating-rope-isolated-on-white-background-with-picture-id1040446784?k=20&m=1040446784&s=612x612&w=0&h=SM0ccxM_Xwua8xFc0YsB4gCTjm4_KpDeE1ppd8TewBM='
			  ],
      },
      {
        id: '1',
        name: 'Product 1',
        price: '12000',
        date: new Date(),
        description: 'ue se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran e',
        brand: 'Product brand',
        code: 'Product-123',
        images: [
        'https://media.istockphoto.com/photos/pair-of-stylish-sneakers-isolated-on-white-background-white-casual-picture-id1248566148?k=20&m=1248566148&s=170667a&w=0&h=Lom1xUV8pfz2kFmzepcEzn52mlEzWj5d2TMDFKlhOsc=', 
        'https://flexi.shoes/blog/wp-content/uploads/sites/7/2018/06/sneaker-clasico-blanco.png', 
        'https://rukminim2.flixcart.com/image/714/857/jcrz6vk0/shoe/g/w/t/ds-1503-10-d-sneakerz-white-original-imafftryhbku8nus.jpeg?q=50', 
        'https://media.istockphoto.com/photos/one-white-sneaker-and-floating-rope-isolated-on-white-background-with-picture-id1040446784?k=20&m=1040446784&s=612x612&w=0&h=SM0ccxM_Xwua8xFc0YsB4gCTjm4_KpDeE1ppd8TewBM='
			  ],
      },
      {
        id: '1',
        name: 'Product 1',
        price: '12000',
        date: new Date(),
        description: 'ue se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran e',
        brand: 'Product brand',
        code: 'Product-123',
        images: [
        'https://media.istockphoto.com/photos/pair-of-stylish-sneakers-isolated-on-white-background-white-casual-picture-id1248566148?k=20&m=1248566148&s=170667a&w=0&h=Lom1xUV8pfz2kFmzepcEzn52mlEzWj5d2TMDFKlhOsc=', 
        'https://flexi.shoes/blog/wp-content/uploads/sites/7/2018/06/sneaker-clasico-blanco.png', 
        'https://rukminim2.flixcart.com/image/714/857/jcrz6vk0/shoe/g/w/t/ds-1503-10-d-sneakerz-white-original-imafftryhbku8nus.jpeg?q=50', 
        'https://media.istockphoto.com/photos/one-white-sneaker-and-floating-rope-isolated-on-white-background-with-picture-id1040446784?k=20&m=1040446784&s=612x612&w=0&h=SM0ccxM_Xwua8xFc0YsB4gCTjm4_KpDeE1ppd8TewBM='
			  ],
      }
    ])

    // const tryData = async () => {
    //   await store.dispatch('products/getProducts')
    // }
    // tryData()
    return { 
      products
    }
  }
})
</script>

<style>

</style>