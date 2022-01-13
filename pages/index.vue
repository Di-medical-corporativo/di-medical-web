<template>
    <div class="home">
        <HeroImageComponent image="home"/>
        <FeaturesComponent/>
        <HexagonBrandsComponent/>
        <ProductsComponent/>
        <YoutubeVideosComponent/>
    </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from '@nuxtjs/composition-api'
export default defineComponent({
    layout: 'main',
    // setup(_ ,{ root, nuxt }) {
    //     root.$nextTick(() => {
    //         root.$nuxt.$loading.start()
    //         setTimeout(() => root.$nuxt.$loading.finish(), 500)
    //     })
    // },

    setup(props) {

    },

    components: {
        HeroImageComponent: defineAsyncComponent(() => import('../components/heroImage.vue')),
        HexagonBrandsComponent: defineAsyncComponent(() => import('../components/home/hexagonBrand.vue')),
        ProductsComponent: defineAsyncComponent(() => import('../components/products.vue')),
        FeaturesComponent: defineAsyncComponent(() => import('../components/home/features.vue')),
        YoutubeVideosComponent: defineAsyncComponent(() => import('../components/home/youtubeVideos.vue'))
    }
})
</script>

<style>

</style>