<template>
  <div class="hexagons">
    <h1 class="hexagons__title" data-aos="fade-left">
      Distribuidores directos de:
    </h1>
    <div class="hexagons__up">
      <div class="hexagon__wrap">
        <div class="hexagon">
          <img data-aos="zoom-in" class="hexagon__img" src="https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/static%2Flogos%2FSalter.png?alt=media&token=6ecd3bfc-2084-4540-8e05-80f2763e3776" alt="Salter Labs logo" srcset="" />
        </div>
      </div>

      <div class="hexagon__wrap">
        <div class="hexagon">
          <img data-aos="zoom-in" class="hexagon__img" src="https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/static%2Flogos%2FResmed.png?alt=media&token=f1896a3e-f356-4349-affb-62b684bf647e" alt="Resmed logo" srcset="" />
        </div>
      </div>

      <div class="hexagon__wrap">
        <div class="hexagon">
          <img data-aos="zoom-in" class="hexagon__img" src="https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/static%2Flogos%2FBan%CC%83o%20Facil.png?alt=media&token=ad1ea014-7449-48df-9c95-179e416fb8d4" alt="Baño Fácil logo" srcset="" />
        </div>
      </div>

      <div class="hexagon__wrap">
        <div class="hexagon">
          <img data-aos="zoom-in" class="hexagon__img" src="https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/static%2Flogos%2Fgeotek.png?alt=media&token=d9079211-990c-4922-a378-3901289053a0" alt="Geotek" srcset="" />
        </div>
      </div>

      <div class="hexagon__wrap">
        <div class="hexagon">
          <img data-aos="zoom-in" class="hexagon__img" src="https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/static%2Flogos%2Ffeellife.png?alt=media&token=b594b297-d1dc-4d61-82b6-193a0ab15fe7" alt="FeelLife logo" srcset="" />
        </div>
      </div>
    </div>
    <div class="hexagons__down">
      <div class="hexagon__wrap">
        <div class="hexagon">
          <img data-aos="zoom-in" class="hexagon__img" src="https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/static%2Flogos%2FBicakcilar.png?alt=media&token=45cc4a25-2890-4304-9db5-cf81266bd13f" alt="Bicakcilar" srcset="" />
        </div>
      </div>
      <div class="hexagon__wrap">
        <div class="hexagon">
          <img data-aos="zoom-in" class="hexagon__img" src="https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/static%2Flogos%2FLongfian.png?alt=media&token=ee80f615-a299-4a0d-91b4-3ce968c5d303" alt="Long Fian" srcset="" />
        </div>
      </div>
      <div class="hexagon__wrap">
        <div class="hexagon">
          <img data-aos="zoom-in" class="hexagon__img" src="https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/static%2Flogos%2FsunmedLogo.png?alt=media&token=fa762af9-ed63-4fc2-a41b-a218d1aecf91" alt="Geotek" srcset="" />
        </div>
      </div>
      <div class="hexagon__wrap">
        <div class="hexagon">
          <img data-aos="zoom-in" class="hexagon__img" src="https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/static%2Flogos%2FlexelLogo.png?alt=media&token=7e446798-d40a-46a1-b5d2-95b3b679eda9" alt="Lexel" srcset="" />
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,256L120,240C240,224,480,192,720,181.3C960,171,1200,181,1320,186.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    <hexagonDecorationComponent class="decoration--3"/>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  components: {
    hexagonDecorationComponent: defineComponent(() => import('../hexagonDecoration.vue'))
  }
})
</script>

<style lang="scss" scoped>
  .decoration--3 {
    position: absolute;
    left: -20px;
    bottom: 0;
    z-index: 2;
     transform: rotate(230deg);
  }
</style>
