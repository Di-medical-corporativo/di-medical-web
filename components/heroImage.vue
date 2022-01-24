<template>
  <div class="heroimage" :style="{'backgroundImage': `url(${imageURL})`}">
    <div class="heroimage__filter"></div>
    <h1 data-aos="fade-up" class="heroimage__title">{{title}}</h1>
    <svg class="heroimage__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path :fill="bgFillColor" fill-opacity="1" d="M0,160L48,165.3C96,171,192,181,288,202.7C384,224,480,256,576,266.7C672,277,768,267,864,234.7C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </div>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent ({
    props: {
        image: {
            type: String,
            default: () => 'home'
        },

        bgFillColor: {
          type:String,
          default: () => '#FFF'
        },

        title: {
          type: String,
          default: () => 'Venta de material medico y de curacion'
        }
    },

    setup({image}) {
      const imageURL = computed(() => require(`../static/images/hero/${image}.jpg`))

      return {
        imageURL
      }
    }
})
</script>

<style>

</style>