<template>
    <div class="main_layout">
        <HeaderComponent/>
        <Nuxt/>
        
        <UpComponent/>

        <FooterComponent/>
    </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from '@vue/composition-api'
export default defineComponent({
    components: {
        HeaderComponent: defineComponent(() => import('../components/header/index.vue')),
        FooterComponent: defineComponent(() => import('../components/footer/index.vue')),        
        UpComponent: defineComponent(() => import('../components/toUp.vue'))
    
    }
})
</script>
