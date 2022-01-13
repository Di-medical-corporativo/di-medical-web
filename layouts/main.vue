<template>
    <div class="">
        <HeaderComponent/>
        <Nuxt/>
    </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from '@vue/composition-api'
export default defineComponent({
    components: {
        HeaderComponent: defineAsyncComponent(() => import('../components/header/index.vue'))
    }
})
</script>
