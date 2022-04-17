<template>
  <b-card
      title="Este es el nombre del producto"
      :img-src="product.images[0]"
      :img-alt="product.name"
      img-top
      tag="article"
      class="card mb-4"
    >
      <b-card-text>
        {{shortenName}}
      </b-card-text>

      <button class="card__button" @click="$router.push({ name: 'products-detail-id', params: { id: product.id } })">Mas informacion</button>
      <template #footer>
        <span>{{product.date}}</span>
      </template>
    </b-card> 
</template>

<script>
import { computed, defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  setup({ product }) {
    const shortenName = computed(() => {
      return product.description.length > 150 ? product.description.substring(0, 140) + '...' : product.description
    })

    return {
      shortenName
    }
  }
})
</script>

<style>
</style>