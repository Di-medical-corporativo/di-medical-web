<template>
  <div class="counter" id="counter">
    <div class="counter__value">
      <div class="value">{{first_value}}</div>
      <div class="title">Clientes satisfechos</div>
    </div>
    <div class="counter__value">
      <div class="value">{{second_value}}</div>
      <div class="title">Clientes satisfechos</div>
    </div>
    <div class="counter__value">
      <div class="value">{{third_value}}</div>
      <div class="title">Clientes satisfechos</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const first_value = ref(0);
    const second_value = ref(0);
    const third_value = ref(0);
    const counter = () => {
      setInterval(() => {
        if(first_value.value === 100){
          return;
        }
        first_value.value += 1;
      }, 20);

      setInterval(() => {
        if(second_value.value === 200){
          return;
        }
        second_value.value += 1;
      }, 20);

      setInterval(() => {
        if(third_value.value === 300){
          return;
        }
        third_value.value += 1;
      }, 20);

      
    }  

    counter()

    return {
      counter,
      first_value,
      second_value,
      third_value,
    }
  }
})
</script>

<style>

</style>