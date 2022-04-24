<template>
  <div class="product__detail__photo">
    <div class="product__detail__photo__main">
      <video 
        autoplay
        muted
        v-if="mainImage.image.includes('mp4')" 
        class="photo__main"
        controls
        >
        <source :src="mainImage.image" type="video/mp4"/>
      </video>
      
      <img
        class="photo__main"
        v-else
        :src="mainImage.image"
      />
      <div class="product__detail__full_size" @click="activateModal">
        <b-icon class="fullscreen__icon" icon="arrows-fullscreen">
        </b-icon>
      </div>
    </div>
    <div class="product__detail__photo__list" v-if="photos.length > 0">
      <div
        class="image__thumb__container"
        v-for="(img, id) in photos"
		:id="id"
        :key="id"
      >
        <video
          autoplay
          muted
          v-if="img.includes('mp4')"
          class="product__detail__photo__thumbnail video"
          @click="setMainImage(img, id)"
		  height="100%"
        >
          <source :src="img" type="video/mp4" />
          No video support.
        </video>
        <img
          v-else
          :src="img"
          @click="setMainImage(img, id)"
          class="product__detail__photo__thumbnail"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "@nuxtjs/composition-api"

export default defineComponent({
  emits: ["showModal"],
  props: {
	photos: {
		type:Array,
		default: () => []
	}
  },
  setup(props, { emit }) {
    let mainImage = ref({})
    mainImage.value = { image: props.photos[0], idx: 0 }
    watch(mainImage, (current, old) => {
      if (process.client) {
        if (current.idx !== old.idx) {
          const currentThumbnail = document.getElementById(current.idx)
          const oldThumbnail = document.getElementById(old.idx)
          currentThumbnail.classList.add("current_thumbnail")
          oldThumbnail.classList.remove("current_thumbnail")
        }
      }
    });
    const setMainImage = (image, idx) => {
      mainImage.value = { image, idx };
    };

    const activateModal = () => {
      emit("showModal", mainImage.value.idx);
    };

    return {
      setMainImage,
      mainImage,
      activateModal,
    };
  },
});
</script>

<style>
</style>