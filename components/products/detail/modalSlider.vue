<template>
  <div class="modal__slider" @click.self="closeModal" :style="{ 'top': !show ? '-100vh' : '0' }">
    <div class="slider">
        <div class="slider__close" @click="closeModal">
          <b-icon icon="x" class="icon"></b-icon>
        </div>
        <div class="slider__main">
          <div class="slider__full" :style="{ backgroundImage: `url(${images[counterImage]})` }">

          </div>
        </div>

        <div class="slider__left__arrow" @click="counterImage--" v-if="counterImage > 0">
          <b-icon icon="arrow-left" class="icon"></b-icon>
        </div>

        <div class="slider__right__arrow" @click="counterImage++" v-if="counterImage < images.length - 1">
          <b-icon icon="arrow-right" class="icon"></b-icon>
        </div>

    </div>
  </div>
</template>

<script>
import { defineComponent, ref, toRefs } from "@nuxtjs/composition-api";

export default defineComponent({
    props: {
        showModal: {
            type: Boolean
        },
        actualImage: {
          type: Number
        }
    },
    setup(props, { emit }) {
      let show = toRefs(props).showModal
      let counterImage = ref(0);
      counterImage.value = props.actualImage;
      const images = ref([
        'https://media.istockphoto.com/photos/pair-of-stylish-sneakers-isolated-on-white-background-white-casual-picture-id1248566148?k=20&m=1248566148&s=170667a&w=0&h=Lom1xUV8pfz2kFmzepcEzn52mlEzWj5d2TMDFKlhOsc=', 
        'https://flexi.shoes/blog/wp-content/uploads/sites/7/2018/06/sneaker-clasico-blanco.png', 
        'https://rukminim2.flixcart.com/image/714/857/jcrz6vk0/shoe/g/w/t/ds-1503-10-d-sneakerz-white-original-imafftryhbku8nus.jpeg?q=50', 
        'https://media.istockphoto.com/photos/one-white-sneaker-and-floating-rope-isolated-on-white-background-with-picture-id1040446784?k=20&m=1040446784&s=612x612&w=0&h=SM0ccxM_Xwua8xFc0YsB4gCTjm4_KpDeE1ppd8TewBM='
			]);
      

      const closeModal = () => {
        emit('closeModal')
      }
      return {
        closeModal,
        show,
        images,
        counterImage,
      }
    }
})
</script>

<style>

</style>