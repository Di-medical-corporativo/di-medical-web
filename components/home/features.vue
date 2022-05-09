<template>
  <div class="features">
    <h1 class="features__title" data-aos="fade-right">Estas en buenas manos</h1>
    <div class="features__list">
        <div class="feature" data-aos="fade-down">
          <div class="feature__icon">
            <b-icon icon="hand-thumbs-up"  style="width: 30px; height: 30px;"></b-icon>
          </div>
          <h4 class="feature__title">Excelentes precios</h4>
          <p class="feature__desc">Precios competitivos en el mercado</p>
        </div>
        <div class="feature" data-aos="fade-down">
          <div class="feature__icon">
            <b-icon icon="person"  style="width: 30px; height: 30px;"></b-icon>
          </div>
          <h4 class="feature__title">Asesoría y Capacitación a clientes</h4>
          <p class="feature__desc">
          Nos distinguimos por tener asesoría personalizada y profesional
          </p>
        </div>
        <div class="feature" data-aos="fade-down">
          <div class="feature__icon">
            <b-icon icon="star"  style="width: 30px; height: 30px;"></b-icon>
          </div>
          <h4 class="feature__title">Productos de alta calidad</h4>
          <p class="feature__desc">Manejamos marcas que son el resultado de un trabajo de investigación científica para aportar a la salud</p>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F8F8F8" fill-opacity="1" d="M0,288L80,293.3C160,299,320,309,480,298.7C640,288,800,256,960,202.7C1120,149,1280,75,1360,37.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    <hexagonDecorationComponent class="decoration--1"/>
    <svg class="decoration--2" version="1.1" xmlns="http://www.w3.org/2000/svg" width="500" height="404" viewbox="0 0 349.8742631289132 404" style="filter: drop-shadow(rgba(255, 255, 255, 0.5) 0px 0px 10px);"><path fill="#c28400" d="M166.2768775266122 4.999999999999999Q174.9371315644566 0 183.597385602301 5L341.2140090910688 96Q349.8742631289132 101 349.8742631289132 111L349.8742631289132 293Q349.8742631289132 303 341.2140090910688 308L183.597385602301 399Q174.9371315644566 404 166.2768775266122 399L8.660254037844386 308Q0 303 0 293L0 111Q0 101 8.660254037844387 96Z"></path></svg>
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
  .decoration--1 {
    position: absolute;
    left: -10px;
    top: 100px;
    z-index: -1;
     transform: rotate(45deg);
  }

   .decoration--2 {
    position: absolute;
    bottom: -120px;
    z-index: -1;
     transform: rotate(45deg);
  }
</style>