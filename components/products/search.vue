<template>
  <div class="search__bar">
    <b-input-group class="input">
      <b-input-group-prepend class="icon">
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input placeholder="Buscar producto por nombre, código, marca o descripción" v-model="term"></b-form-input>
    </b-input-group>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "@nuxtjs/composition-api";

export default defineComponent({
  setup(_, { emit }) {
    const term = ref('')
    watch(term, () => {
      emit('search', term.value)
    })
    return { 
      term
    }
  }
})
</script>
 
</style>