<template>
  <div class="contact__hero">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#fafafa" fill-opacity="1" d="M0,224L120,186.7C240,149,480,75,720,85.3C960,96,1200,192,1320,240L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
    </svg>
    <h1 data-aos="fade-left" class="contact__hero__title">¿Aun no estas convencido?</h1>
    <div class="contact__hero__desc">
      <p class="desc"> Contacta con uno de nuestros asesores, resolverá todas tus dudas.</p>
      <button class="contact__hero__button" @click="$router.push({ name: 'contact' })">Contacto</button>
    </div>
    <hexagonDecorationComponent class="decoration--6"/>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  components: {
    hexagonDecorationComponent: defineAsyncComponent(() => import('../hexagonDecoration.vue'))
  }
})
</script>

<style lang="scss" scoped>
  .decoration--6 {
    position: absolute;
    right: -40px;
    bottom: 0px;
    z-index: -1;
     transform: rotate(45deg);
  }
</style>