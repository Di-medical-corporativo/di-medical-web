<template>
  <header class="header">
    <nav class="header__nav">
        <ul class="header__list">
            <li class="header__list__item">
                <nuxt-link to="/">Inicio</nuxt-link>
            </li>
            <li class="header__list__item">
                <nuxt-link to="/about">Conocenos</nuxt-link>
            </li>
            <li class="header__list__item">Productos</li>
            <li class="header__list__item icon">
                <img src="../../static/images/dimedicalLogo.png" class="header__icon" alt="Dimedical corporativo icon">
            </li>
            <li class="header__list__item">Blog</li>
            <li class="header__list__item">Contacto</li>
            <li class="header__list__item">Idioma</li>
        </ul>
    </nav>
    <nav class="header__nav-mobile">
        <ul class="header__list-mobile">
            <li class="header__list__item-mobile icon">
                <img src="../../static/images/dimedicalLogo.png" class="header__icon" alt="Dimedical corporativo icon" srcset="">
            </li>
            <li class="header__list__item-mobile" @click="showNav = !showNav">
                <b-icon icon="list" style="width: 55px; height: 55px;"></b-icon>
            </li>
        </ul>
    </nav>
    <NavBarComponent :open="showNav" @close="showNav = !showNav"/>
  </header>
</template>

<script>
import { defineComponent, ref,
defineAsyncComponent } from '@nuxtjs/composition-api'
export default defineComponent({
    setup () {
        const showNav = ref(false)
        return {
            showNav
        }
    },
    components: {
        NavBarComponent: defineAsyncComponent(() => import('./navBar.vue'))
    }
})
</script>

<style>

</style>