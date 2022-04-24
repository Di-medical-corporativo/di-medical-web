<template>
  <b-card
      title="Este es el nombre del producto"
      :img-src="product.photos[0]"
      :img-alt="photoThumb[0]"
      :sub-title="product.brand"
      img-top
      tag="article"
      class="card mb-4"
    > 
      <b-card-text>
        {{shortenName}}
      </b-card-text>

      <button class="card__button" @click="$router.push({ name: 'products-detail-id', params: { id: product.id } })">Mas informacion</button>
      <span>
        <b-icon 
        :icon="product.stock? 'check2' : 'x'" 
        :variant="product.stock? 'success' : 'danger'"
        ></b-icon> 
          {{product.stock? 'En stock' : 'Agotado'}}
      </span>
      <template #footer>
        <span>{{date}}</span>
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
      shortenName,
      photoThumb: computed(() => product.photos.filter(e => e.includes('jpg'))),
      date: computed(() =>{
        const date = new Date(product.date)
        return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
      })
    }
  }
})
</script>

<style>
</style>