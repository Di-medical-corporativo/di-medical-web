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

    const appeared = () => {
      if(process.client){
        const rect = document.getElementById('counter').getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
      }
    }
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
    const checkIfMobile = () => {
      if(window.matchMedia("(max-width: 750px)").matches){
        return true
      }
      return false;
    }

    if (process.client) {
      if(!checkIfMobile()) {
        document.addEventListener('scroll', () => {
          if(appeared()) {
            counter()
          }
        })
      } else {
        counter()
      }
      
    }

    return {
      counter,
      first_value,
      second_value,
      third_value,
      appeared
    }
  }
})
</script>

<style>

</style>