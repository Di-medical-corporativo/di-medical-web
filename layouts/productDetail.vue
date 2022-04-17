<template>
    <div class="main_layout">
        <HeaderComponent/>
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
    }
})
</script>
