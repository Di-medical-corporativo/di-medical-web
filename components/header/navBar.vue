<template>
  <div class="navbar" id="nav" :style="{ display: open? 'flex' : 'none' }">
    <ul class="navbar__list">
        <li class="navbar__list__item">
            <nuxt-link :to="{ name: 'index' }" data-text="inicio">Inicio</nuxt-link>
        </li>
        <li class="navbar__list__item">
            <nuxt-link :to="{ name: 'about' }" data-text="Conocenos">Conocenos</nuxt-link>
        </li>
        <li class="navbar__list__item">
            <nuxt-link :to="{ name: 'products' }" data-text="Productos" >Productos</nuxt-link>
        </li>
        <li class="navbar__list__item">
            <nuxt-link :to="{ name: 'contact' }" data-text="Contacto">Contacto</nuxt-link>
        </li>
    </ul>
    <b-icon 
        @click="$emit('close')"
        icon="x-circle" 
        class="close" 
        style="width: 50px; height: 50px;"></b-icon>
  </div>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
export default defineComponent({
    props: {
        open: {
            type: Boolean,
            required:true
        }
    },
    setup() {
    }
})
</script>

<style>

</style>