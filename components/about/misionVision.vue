<template>
  <div class="principles">
    <div class="principle" data-aos="fade-down">
      <h1 class="principle__title">Misión</h1>
      <p class="principle__desc">
        Ofrecer productos para la salud de alta calidad que:
      </p>
      <ul class="principle__desc mision">
        <li>
          Los doctores califiquen a Di-medical como la mejor opción para sus
          pacientes.
        </li>
        <li>Los compradores elijan a Di-medical para sus pacientes.</li>
        <li>
          Los empleados de Di-medical se sientan orgullosos de contribuir con su
          talento en el éxito de nuestros clientes.
        </li>
        <li>Ser líderes mediante negocios responsables.</li>
      </ul>
    </div>
    <div class="principle" data-aos="fade-down">
      <h1 class="principle__title">Visión</h1>
      <p class="principle__desc">
        Ser el proveedor preferido de nuestros clientes, consolidar el
        liderazgo, marcar la diferencia ofreciendo innovación de productos para
        el area de la salud y ser una empresa sustentable
      </p>
    </div>
    <div class="principle" data-aos="fade-down">
      <h1 class="principle__title">Valores</h1>
      <ul class="principle__desc">
        <li>Responsabilidad</li>
        <li>Trabajo en equipo</li>
        <li>Felicidad</li>
        <li>Honestidad</li>
      </ul>
    </div>
    <svg
      class="decoration--8"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="404"
      viewbox="0 0 349.8742631289132 404"
      style="filter: drop-shadow(rgba(255, 255, 255, 0.5) 0px 0px 10px)"
    >
      <path
        fill="#c28400"
        d="M166.2768775266122 4.999999999999999Q174.9371315644566 0 183.597385602301 5L341.2140090910688 96Q349.8742631289132 101 349.8742631289132 111L349.8742631289132 293Q349.8742631289132 303 341.2140090910688 308L183.597385602301 399Q174.9371315644566 404 166.2768775266122 399L8.660254037844386 308Q0 303 0 293L0 111Q0 101 8.660254037844387 96Z"
      ></path>
    </svg>
    <svg
      class="decoration--9"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="404"
      viewbox="0 0 349.8742631289132 404"
      style="filter: drop-shadow(rgba(255, 255, 255, 0.5) 0px 0px 10px)"
    >
      <path
        fill="#c28400"
        d="M166.2768775266122 4.999999999999999Q174.9371315644566 0 183.597385602301 5L341.2140090910688 96Q349.8742631289132 101 349.8742631289132 111L349.8742631289132 293Q349.8742631289132 303 341.2140090910688 308L183.597385602301 399Q174.9371315644566 404 166.2768775266122 399L8.660254037844386 308Q0 303 0 293L0 111Q0 101 8.660254037844387 96Z"
      ></path>
    </svg>
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  components: {
    hexagonDecorationComponent: defineComponent(() =>
      import("../hexagonDecoration.vue")
    ),
  },
});
</script>

<style lang="scss" scoped>
.decoration--8 {
  position: absolute;
  top: 10px;
  right: -180px;
  z-index: 1;
  transform: rotate(-189deg);
}

.decoration--9 {
  position: absolute;
  bottom: 0;
  left: -180px;
  z-index: 1;
  transform: rotate(10deg);
}
</style>
