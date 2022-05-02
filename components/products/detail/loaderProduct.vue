<template>
  <div class="product__loader">
    <div class="loader__product__photos">
        <div class="loader__product__photos__main__image">
            <b-skeleton-img no-aspect class="photo__loader"></b-skeleton-img>
        </div>
        <div class="loader__product__photos__thumbs">
            <div class="loader__product__photos__thumb" v-for="i in 4" :key="i">
                <b-skeleton-img no-aspect class="thumb__skeleton"></b-skeleton-img>
            </div>
        </div>
    </div>

    <div class="loader__product__desc">
        <div class="loader__product__desc__title">
            <b-skeleton></b-skeleton>
            <b-skeleton width="90%"></b-skeleton>
        </div>
        <div class="loader__product__desc__details">
            <b-skeleton width="20%"></b-skeleton>
        </div>
        <div class="loader__product__desc__text">
            <b-skeleton></b-skeleton>
            <b-skeleton></b-skeleton>
            <b-skeleton></b-skeleton>
            <b-skeleton></b-skeleton>
            <b-skeleton width="90%"></b-skeleton>
            <b-skeleton width="80%"></b-skeleton>
            <b-skeleton width="70%"></b-skeleton>
        </div>
        <div class="loader__product__desc__spec">
            <b-skeleton width="100%"></b-skeleton>
            <b-skeleton width="90%"></b-skeleton>
            <b-skeleton width="80%"></b-skeleton>
            <b-skeleton width="70%"></b-skeleton>
            <b-skeleton width="60%"></b-skeleton>
            <b-skeleton width="50%"></b-skeleton>
            <b-skeleton width="40%"></b-skeleton>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>