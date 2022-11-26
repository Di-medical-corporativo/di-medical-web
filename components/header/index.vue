<template>
  <header class="header">
    <nav class="header__nav">
        <ul class="header__list">
            <li class="header__list__item">
                <nuxt-link :to="{ name: 'index' }">Inicio</nuxt-link>
            </li>
            <li class="header__list__item">
                <nuxt-link :to="{ name: 'about' }">Conócenos</nuxt-link>
            </li>
            <li class="icon" @click="$router.push({ name: 'index' })">
                <img src="../../static/images/dimedicalLogo.png" class="header__icon" alt="Di medical corporativo">
            </li>
            <li class="header__list__item">
                <nuxt-link :to="{ name: 'products' }">Productos</nuxt-link>
            </li>

            <li class="header__list__item">
				<nuxt-link :to="{ name: 'contact' }">Contacto</nuxt-link>
			</li>
        </ul>
    </nav>
    <nav class="header__nav-mobile">
        <ul class="header__list-mobile">
            <li class="header__list__item-mobile icon" @click="$router.push({ name: 'index' })">
                <img src="../../static/images/dimedicalLogo.png" class="header__icon" alt="Di medical corporativo" srcset="">
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
        NavBarComponent: defineComponent(() => import('./navBar.vue'))
    }
})
</script>

<style>

</style>
