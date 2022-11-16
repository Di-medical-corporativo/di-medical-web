<template>
    <div class="home">
        <HeroImageComponent image="home"/>
        
        <LazyHydrate when-visible>
            <FeaturesComponent/>
        </LazyHydrate>
        
        <LazyHydrate when-visible>
            <HexagonBrandsComponent/>
        </LazyHydrate>

        <LazyHydrate when-visible>
            <ProductsComponent/>
        </LazyHydrate>

        <LazyHydrate when-visible>
            <CounterComponent/>
        </LazyHydrate>

        <LazyHydrate when-visible>
            <ContactHeroComponent/>
        </LazyHydrate>
    </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import { defineComponent, defineAsyncComponent, useMeta } from '@nuxtjs/composition-api'
import homeMeta from '../metadata/home'

export default defineComponent({
    head: {},
    layout: 'main',
    setup(props) {
        useMeta(homeMeta)
    },

    components: {
        LazyHydrate,
        HeroImageComponent: defineComponent(() => import('../components/heroImage.vue')),
        HexagonBrandsComponent: defineComponent(() => import('../components/home/hexagonBrand.vue')),
        ProductsComponent: defineComponent(() => import('../components/products.vue')),
        FeaturesComponent: defineComponent(() => import('../components/home/features.vue')),
        CounterComponent: defineComponent(() => import('../components/counter.vue')),
        ContactHeroComponent: defineComponent(() => import('../components/home/contactHero.vue')),
    }
})
</script>

<style>

</style>
