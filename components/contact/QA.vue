<template>
  <div class="qa">
    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#FAFAFA"
        fill-opacity="1"
        d="M0,160L48,138.7C96,117,192,75,288,96C384,117,480,203,576,213.3C672,224,768,160,864,133.3C960,107,1056,117,1152,149.3C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
    <h1 class="qa__title" data-aos="fade-right">Preguntas frecuentes</h1>
    <div class="qa__questions" role="tablist">
      <b-card no-body class="qa__question">
        <b-card-header role="tab" class="qa__header">
          <b-card-text block v-b-toggle.accordion-1>Pregunta</b-card-text>
        </b-card-header>
        <b-collapse
          id="accordion-1"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>Pregunta 1</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="qa__question">
        <b-card-header role="tab" class="qa__header">
          <b-card-text block v-b-toggle.accordion-2>Pregunta</b-card-text>
        </b-card-header>
        <b-collapse
          id="accordion-2"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>Pregunta 1</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="qa__question">
        <b-card-header role="tab" class="qa__header">
          <b-card-text block v-b-toggle.accordion-3>Pregunta</b-card-text>
        </b-card-header>
        <b-collapse
          id="accordion-3"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>Pregunta 1</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup(props, context) {
    
  },
});
</script>

<style>
</style>