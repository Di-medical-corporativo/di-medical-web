<template>
  <div class="navbar" id="nav" :style="{ left: open? '0' : '-100vw' }">
    <ul class="navbar__list">
        <li class="navbar__list__item" @click="$emit('close')">
            <nuxt-link :to="{ name: 'index' }">Inicio</nuxt-link>
        </li>
        <li class="navbar__list__item" @click="$emit('close')">
            <nuxt-link :to="{ name: 'about' }">Conocenos</nuxt-link>
        </li>
        <li class="navbar__list__item" @click="$emit('close')">
            <nuxt-link :to="{ name: 'products' }">Productos</nuxt-link>
        </li>
        <li class="navbar__list__item" @click="$emit('close')">
            <nuxt-link :to="{ name: 'contact' }">Contacto</nuxt-link>
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
    }
})
</script>

<style>

</style>