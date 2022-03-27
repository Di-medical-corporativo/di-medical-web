<template>
  <div class="product__detail__photo">
		<div class="product__detail__photo__main" :style="{ backgroundImage: `url(${mainImage.image})` }">
			<div class="product__detail__full_size" @click="activateModal">
				<b-icon class="fullscreen__icon" icon="arrows-fullscreen"></b-icon>
			</div>
		</div>
		<div class="product__detail__photo__list">
			<div 
				class="product__detail__photo__thumbnail" 
				v-for="(img, id) in images" 
				:key="id"
				:style="{ backgroundImage: `url(${img})` }"
				@click="setMainImage(img, id)" 
				:id="id"
				:class="id == 0 ? 'current_thumbnail' : ''"
			>
			</div>
		</div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "@nuxtjs/composition-api";

export default defineComponent({
	emits: ['showModal'],
	setup(props, { emit }) {
		const images = ref([
			'https://media.istockphoto.com/photos/pair-of-stylish-sneakers-isolated-on-white-background-white-casual-picture-id1248566148?k=20&m=1248566148&s=170667a&w=0&h=Lom1xUV8pfz2kFmzepcEzn52mlEzWj5d2TMDFKlhOsc=', 
			'https://flexi.shoes/blog/wp-content/uploads/sites/7/2018/06/sneaker-clasico-blanco.png', 
			'https://rukminim2.flixcart.com/image/714/857/jcrz6vk0/shoe/g/w/t/ds-1503-10-d-sneakerz-white-original-imafftryhbku8nus.jpeg?q=50', 
			'https://media.istockphoto.com/photos/one-white-sneaker-and-floating-rope-isolated-on-white-background-with-picture-id1040446784?k=20&m=1040446784&s=612x612&w=0&h=SM0ccxM_Xwua8xFc0YsB4gCTjm4_KpDeE1ppd8TewBM='
			]);
		let mainImage = ref({});
		mainImage.value = {image: images.value[0], idx: 0};
		watch(mainImage, (current, old) => {
			if(process.client) {
				if(current.idx !== old.idx) {
					const currentThumbnail = document.getElementById(current.idx);
					const oldThumbnail = document.getElementById(old.idx)
					currentThumbnail.classList.add('current_thumbnail')
					oldThumbnail.classList.remove('current_thumbnail')
				}
			}
		})
		const setMainImage = (image, idx) => {
			mainImage.value = { image, idx }
		}

		const activateModal = () => {
			emit('showModal', mainImage.value.idx);
		} 

		return {
			images,
			setMainImage,
			mainImage,
			activateModal
		}
	}
})
</script>

<style>

</style>