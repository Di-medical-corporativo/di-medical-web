<template>
  <div class="form__contact">
    <div class="form__info">
      <h2>Información de contacto:</h2>
      <p class="form__info__desc">
        Contactanos, nuestro personal se encuentra capacitado para guiarte y
        asesorarte en tu compra.
      </p>
      <div class="form__info__icon">
        <p class="mb-3 info__icon">
          <b-icon icon="envelope-fill" class="icon"></b-icon> ventas@dimedicaldelsur.mx
        </p>
        <p class="mb-3 info__icon">
          <b-icon class="icon" icon="telephone-fill"></b-icon> +52 5572616849 / +52 5571606208
        </p>
        <p class="mb-3 info__icon">
          <b-icon class="icon" icon="clock-fill"></b-icon> Lunes - viernes, 9:00
          - 18:00
        </p>
      </div>
	  <div class="form__info__media">
          <a href="https://bit.ly/3M8lgP3">
            <b-icon class="media__icon" icon="facebook"></b-icon>
          </a>
          <a href="https://bit.ly/3aI1vRx">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="media__icon bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
          </a>
          <a href="https://bit.ly/3awalS9">
            <b-icon class="media__icon" icon="instagram"></b-icon>
          </a>
          <a href="https://bit.ly/3xaqrdg">
            <b-icon class="media__icon" icon="youtube"></b-icon>
          </a>
          <a href="https://bit.ly/3ziRBQH">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25" height="25"
              fill="currentColor"
              class="media__icon bi bi-tiktok"
              viewBox="0 0 16 16"
            >
              <path
                d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"
              />
            </svg>
          </a>
        </div>
    </div>
    <div class="form">
      <form>
        <h2 data-aos="fade-right">Ponte en contacto:</h2>
        <b-form-input
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Asunto"
		  v-model="subject"
        ></b-form-input>
        <b-form-textarea
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Mensaje..."
		  v-model="message"
        ></b-form-textarea>

		<div class="form__buttons">
			<b-button class="form__button" @click.prevent="sendEmail">Enviar</b-button>
			<b-button class="form__button" @click.prevent="message = ''; subject = ''">Borrar</b-button>
		</div>
    <hexagonDecorationComponent class="decoration--10"/>
	  </form>
    </div>

	<b-modal id="my-modal" ref="modal">Gracias por tu mensaje, te respondremos a la brevedad.</b-modal>


    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#FAFAFA"
        fill-opacity="1"
        d="M0,0L24,0C48,0,96,0,144,10.7C192,21,240,43,288,74.7C336,107,384,149,432,144C480,139,528,85,576,101.3C624,117,672,203,720,250.7C768,299,816,309,864,266.7C912,224,960,128,1008,74.7C1056,21,1104,11,1152,10.7C1200,11,1248,21,1296,37.3C1344,53,1392,75,1416,85.3L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
      ></path>
    </svg>
  </div>
</template>

<script>
import { computed, defineComponent, defineAsyncComponent, ref } from "@nuxtjs/composition-api"

export default defineComponent({
  setup(_, context) {
    const subject = ref('')
	  const message = ref('')
	  const modal = ref('')
	  const link = computed(() => {
		  return `mailto:ventas@dimedicaldelsur.mx;administracion@dimedicalcorporativo.mx?subject=${subject.value}&body=${message.value}`
	  })
    const sendEmail = () => {
		  if(process.client){
		  	const a = document.createElement("a")
			  if(!subject.value || !message.value){
				  return;
			  }
			  a.href = link.value
			  a.click()
			  modal.value.show()
		  }
	  }

    return {
      sendEmail,

      subject,
	    message,
	    modal
    }
  },
  components: {
    hexagonDecorationComponent: defineAsyncComponent(() => import('../hexagonDecoration.vue'))
  }
})
</script>

<style lang="scss" scoped>
  .decoration--10 {
    position: absolute;
    right: -60px;
    z-index: -1;
    top: 0;
  }
</style>