<template>
  <div class="product__detail">
    <template v-if="!isLoading">
      <div class="product__detail__main">
        <div class="product__detail__section">
          <ProductPhotoComponent
            @showModal="activateModal"
            :photos="product[0].photos"
          />
        </div>
        <div class="product__detail__section">
          <ProductDescComponent :product="product[0]" />
        </div>
      </div>
      <hr class="product__detail__line" />
      <div
        class="product__detail__recommendations"
        v-if="recommendedProducts.length > 0"
      >
        <h3 class="product__detail__recommendations__title">
          Te podria interesar:
        </h3>
        <ProductRecommendationComponent
          v-for="card in recommendedProducts"
          :key="card.id"
          :product="card"
          class="ml-3 product__recommendation"
        />
      </div>
      <ModalSliderComponent
        v-if="!isLoading"
        :isDisplayed="showModal"
        :actualImageId="actualModalImageIdx"
        @closeModal="activateModal"
        :imageList="product[0].photos"
      />
    </template>
    <ProductLoaderSkeletonComponent v-else />
  </div>
</template>

<script>
import {
  defineComponent,
  useRoute,
  useRouter,
  useMeta,
  ref
} from "@nuxtjs/composition-api";
import useProduct from "@/composables/useProduct";

export default defineComponent({
  layout: "productDetail",
  head: {},
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { getProductById, getRecommendedProducts } = useProduct();

    const showModal = ref(false);
    const product = ref([
      {
        title: "",
        photos: [],
        desc: "",
      },
    ]);
    const isLoading = ref(false);
    const recommendedProducts = ref([]);
    const actualModalImageIdx = ref(0);

    const activateModal = (idx) => {
      showModal.value = !showModal.value;
      actualModalImageIdx.value = idx;
    };

    const getProduct = async () => {
      isLoading.value = true;
      try {
        product.value = await getProductById(route.value.params.id);
        if (!product.value) {
          return router.push({ name: "products" });
        }
        recommendedProducts.value = await getRecommendedProducts(
          product.value[0].id
        );
        isLoading.value = false;
      } catch (error) {
        return router.push({ name: "products" });
      }
    };

    getProduct();
    useMeta({
      title:
        "Detalles del producto | Lo más selecto de las mejores marcas para el mercado hospitalario.",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Conoce nuestros productos, lo más selecto de las mejores marcas para el mercado hospitalario.",
        },
        { hid: "author", name: "author", content: "Di medical corporativo" },
        {
          hid: "og-title",
          name: "og:title",
          content: `Detalles del producto | Lo más selecto de las mejores marcas para el mercado hospitalario.`,
        },
        { hid: "og-type", name: "og:type", content: "website" },
        {
          hid: "og-url",
          name: "og:url",
          content: `https://www.dimedicalcorporativo.mx/products/detail/${route.value.params.id}`,
        },
        {
          hid: "og-description",
          name: "og:description",
          content: product.value[0].title || "Detalles del producto",
        },
        {
          hid: "og-image",
          name: "og:image",
          content:
            product.value[0].photos[0] ||
            "https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/corp_logo.jpg?alt=media&token=6bc0943d-3c07-4791-a1bb-75f063fb504f",
        },
      ],
    });

    return {
      showModal,
      activateModal,
      actualModalImageIdx,
      isLoading,
      product,
      recommendedProducts,
    };
  },

  components: {
    ProductPhotoComponent: defineComponent(() =>
      import("@/components/products/detail/photo.vue")
    ),
    ProductDescComponent: defineComponent(() =>
      import("~/components/products/detail/productDesc.vue")
    ),
    ProductRecommendationComponent: defineComponent(() =>
      import("@/components/products/product.vue")
    ),
    ModalSliderComponent: defineComponent(() =>
      import("@/components/products/detail/modalSlider.vue")
    ),
    ProductLoaderSkeletonComponent: defineComponent(() =>
      import("@/components/products/detail/loaderProduct.vue")
    ),
  },
});
</script>

<style>
</style>
