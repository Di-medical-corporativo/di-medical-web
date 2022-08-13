<template>
  <b-card
    :img-src="photoThumb[0] || ''"
    :img-alt="product.title || ''"
    :sub-title="product.brand || ''"
    :title="shortenTitle || ''"
    img-top
    tag="article"
    class="card mb-4"
  >
    <b-card-text>
      {{ shortenName || "" }}
    </b-card-text>

    <button
      class="card__button"
      @click="
        $router.push({
          name: 'products-detail-id',
          params: { id: product.id },
        })
      "
    >
      Mas informacion
    </button>
    <span>
      <b-icon
        :icon="product.stock ? 'check2' : 'x'"
        :variant="product.stock ? 'success' : 'danger'"
      ></b-icon>
      {{ product.stock ? "En stock" : "Agotado" }}
    </span>
  </b-card>
</template>

<script>
import { computed, defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  setup({ product }) {
    return {
      shortenName: computed(() => {
        return product.description.length > 120
          ? product.description.substring(0, 50) + "..."
          : product.description;
      }),
      shortenTitle: computed(() => {
        return product.title.length > 40
          ? product.title.substring(0, 20) + "..."
          : product.title;
      }),
      photoThumb: computed(
        () => product.photos.filter((e) => e.includes("jpg")) || []
      )
    };
  },
});
</script>

<style>
</style>
