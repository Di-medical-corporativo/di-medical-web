<template>
    <div class="main_layout">
        <HeaderComponent/>
        <StoriesComponent/>
        <Nuxt/>
        <UpComponent/>
        <FooterComponent/>
    </div>
</template>

<script>
import { defineComponent, defineAsyncComponent, onMounted } from '@nuxtjs/composition-api'
export default defineComponent({
    components: {
        HeaderComponent: defineComponent(() => import('../components/header/index.vue')),
        FooterComponent: defineComponent(() => import('../components/footer/index.vue')),
        StoriesComponent: defineComponent(() => import('../components/stories/index.vue')),
        UpComponent: defineComponent(() => import('../components/toUp.vue'))
    
    },
    mounted() {
        if(process.client && !sessionStorage.getItem('cookiesStatement')) {
                this.$bvToast.toast(`Utilizamos cookies propias y de terceros para mejorar nuestro servicio. 
                Si continúa con la navegación, consideramos que acepta este uso.`, {
                title: `Cookies`,
                id: '1',
                toaster: 'b-toaster-bottom-left',
                variant:'info',
                solid: true,
                appendToast: true
            })
        }
            if(process.client) {
                sessionStorage.setItem('cookiesStatement', 1)
            }
    },
})
</script>
