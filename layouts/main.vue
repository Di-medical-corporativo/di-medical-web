<template>
    <div class="main_layout">
        <HeaderComponent/>
        <StoriesComponent/>
        <Nuxt/>
        <FooterComponent/>
    </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from '@vue/composition-api'
export default defineComponent({
    components: {
        HeaderComponent: defineAsyncComponent(() => import('../components/header/index.vue')),
        FooterComponent: defineAsyncComponent(() => import('../components/footer/index.vue')),
        StoriesComponent: defineAsyncComponent(() => import('../components/stories/index.vue'))
        
    }
})
</script>
