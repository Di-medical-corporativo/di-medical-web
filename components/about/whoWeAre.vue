<template>
  <div class="who">
    <div class="who__team">
        <img  src="~/static/images/1.png" alt="" data-aos="fade-up">
    </div>
    <div class="who__statement">
        <h1 data-aos="fade-down" class="who__statement__title">Sobre nosotros</h1>
        <p class="statement">Somos una empresa dedicada a la importación y
distribución de equipo médico y material de curación
especializados en las áreas de terapia respiratoria,
anestesia, sala de operaciones y terapia de infusión.</p>
    </div>
    <hexagonDecorationComponent class="decoration--7"/>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#fafafa" fill-opacity="1" d="M0,96L80,122.7C160,149,320,203,480,229.3C640,256,800,256,960,240C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from '@nuxtjs/composition-api'
export default defineComponent({
    components: {
        hexagonDecorationComponent: defineAsyncComponent(() => import('../hexagonDecoration.vue'))
    }
})
</script>

<style lang="scss" scoped>
  .decoration--7 {
    position: absolute;
    right: -80px;
    top: 50px;
    z-index: -1;
  }

</style>