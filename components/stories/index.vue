<template>
  <div class="stories" >
    <div class="stories__list" :style="closeStyle">
      <div class="stories__list__close" @click="closeList = !closeList">
        <b-icon :icon="closeIcon"></b-icon>
      </div>
      <div 
        class="story" 
        v-for="(s, idx) in stories" 
        :key="idx" 
        :style="{ 'backgroundImage': `url(${s.image})` }"
        @click="changeCurrentImage(idx)"
        >
        </div>
    </div>

    <ModalSliderComponent :images="stories" :idx="currentImage" :open="toggleModal" @closeModal="closeModal"/>
  </div>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const closeList = ref(true)
    const toggleModal = ref(false) 
    const currentImage = ref(0)

    const stories = ref([
      {
        image: 'https://fotoarte.com.uy/wp-content/uploads/2019/03/Landscape-fotoarte.jpg',
        date: ''
      },
      {
        image: 'https://scontent.fmex12-1.fna.fbcdn.net/v/t39.30808-6/274697923_496453448738091_1120372905742955695_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeET6szPPZPGJrLnhzQLH7difSItVuxo0Jd9Ii1W7GjQl7B8It8Xa3MrTbY2kQdqZK0RWb3Px6BtGRkwAZU1H8wi&_nc_ohc=EpyRLSv4Rk4AX_disa0&_nc_ht=scontent.fmex12-1.fna&oh=00_AT9Cl1KSarWZeGqrZMFSisZ8X7zbFaFMtaKCLJRYQzb0xA&oe=625E9866',
        date: ''
      },
      {
        image: 'https://www.tuexpertoapps.com/wp-content/uploads/2021/05/fondos-con-colores-3.png',
        date: ''
      },
      {
        image: 'https://scontent.fmex12-1.fna.fbcdn.net/v/t39.30808-6/274854062_497275865322516_4534876271128384274_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeGel1IRtXBHN_Xq8RWqejm6E-ci_VZIGfgT5yL9VkgZ-CMUR6i4Wh8DGPKTudcEYZWp_emYc6UzWZLxw2b7ojof&_nc_ohc=GbVQgOiEPYYAX8bVkTp&_nc_ht=scontent.fmex12-1.fna&oh=00_AT8CtdHY87ElPKLk3Fu-VPXzfD43EhXV-cprnK3IEtpHLw&oe=625DFB3E',
        date: ''
      },
      {
        image: 'https://scontent.fmex12-1.fna.fbcdn.net/v/t39.30808-6/277573600_515362236847212_6478531608157232780_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHlvJnydUyZCwpTj9d7c9YeJaBFaCrjArsloEVoKuMCu1QtVhwJ2U-x12_3hK5kt_ZsfkNRcDcWR_eEwfSwdbu-&_nc_ohc=RL7v9FkIxqUAX9rE6fP&_nc_ht=scontent.fmex12-1.fna&oh=00_AT-XMPwee1dMvsja6JSVTDj-MF4WBnAbReHu5a6sLYocDg&oe=625E0ADF',
        date: ''
      },
    ])

    const closeIcon = computed(() => {
      return closeList.value === true ? 'arrow-bar-left': 'x'
    })

    const closeStyle = computed(() => {
      return { 'right' : closeList.value ? '-250px' : '-5px' }
    })

    const closeModal = () => {
      toggleModal.value = !toggleModal.value
    }

    const changeCurrentImage = (idx) => {
      toggleModal.value = !toggleModal.value
      currentImage.value = idx
    }

    return { 
      closeList,
      stories,
      closeIcon,
      closeStyle,
      toggleModal,
      closeModal,
      changeCurrentImage,
      currentImage
    }
  },

  components: {
    ModalSliderComponent: defineAsyncComponent(() => import('./modalStories.vue'))
  }
})
</script>

<style>

</style>