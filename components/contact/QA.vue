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
    <div class="qa__questions">
      <div class="qa__question">
        <div class="question" v-b-toggle.collapse-1>
          Pregunta <b-icon icon="arrow-down-circle-fill"></b-icon>
        </div>
        <b-collapse id="collapse-1" class="qa__question__collapsable">
          <b-card>I am collapsible content!</b-card>
        </b-collapse>
      </div>
      <div class="qa__question">
        <div class="question" v-b-toggle.collapse-2>
          Pregunta <b-icon icon="arrow-down-circle-fill"></b-icon>
        </div>
        <b-collapse id="collapse-2" class="qa__question__collapsable">
          <b-card>I am collapsible content!</b-card>
        </b-collapse>
      </div>
      <div class="qa__question">
        <div class="question" v-b-toggle.collapse-3>
          Pregunta <b-icon icon="arrow-down-circle-fill"></b-icon>
        </div>
        <b-collapse id="collapse-3" class="qa__question__collapsable">
          <b-card>I am collapsible content!</b-card>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>