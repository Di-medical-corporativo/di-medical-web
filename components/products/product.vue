<template>
  <b-card
      title="Este es el nombre del producto"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      class="card mb-4"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>

      <button class="card__button">Mas informacion</button>
      <template #footer>
        <span>Publicado el 3/3/2022</span>
      </template>
    </b-card> 
</template>

<script>
export default {}
</script>

<style>
</style>