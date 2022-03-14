<template>
  <div class="error">
    <h1 class="error__code">{{error.statusCode}}</h1>
    <p class="error__message">{{error.message}}</p>
    <nuxt-link :to="{ name: 'index' }" class="error__back">Regresar al inicio</nuxt-link>
  </div>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            default: () => {},
        }
    }
}
</script>

<style>

</style>