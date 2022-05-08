<template>
    <div class="main_layout">
        <HeaderComponent/>
        <StoriesComponent/>
        <Nuxt/>
        <FooterComponent/>


    </div>
</template>

<script>
import { defineComponent, defineAsyncComponent, onMounted } from '@vue/composition-api'
export default defineComponent({
    components: {
        HeaderComponent: defineAsyncComponent(() => import('../components/header/index.vue')),
        FooterComponent: defineAsyncComponent(() => import('../components/footer/index.vue')),
        StoriesComponent: defineAsyncComponent(() => import('../components/stories/index.vue'))
    },

    setup(_, { root }) {
        onMounted(() => {
            if(process.client && !sessionStorage.getItem('cookiesStatement')) {
                root.$bvToast.toast(`Utilizamos cookies propias y de terceros para mejorar nuestro servicio. 
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
        })
    }
})
</script>
