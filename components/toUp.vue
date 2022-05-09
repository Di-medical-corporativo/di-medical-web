<template>
  <div class="up" @click="up">
    <b-icon icon="arrow-up" class="up__icon"></b-icon>
  </div>
</template>

<script>
export default {

}
</script>

<script>
export default {
    name:"ToUp",
    data(){
        return{
        }
    },
    methods: {
        handleScroll(){
            let up = document.querySelector(".up")
            if(document.documentElement.scrollTop > 100){
                up.style.display = "flex"
            } else {
                up.style.display = "none"
            }
        },
        up(){
                window.scrollTo({
                    top:0,
                    behavior: "smooth"
            })
        }
    },
    created(){
        window.addEventListener("scroll", this.handleScroll)
    },
     destroyed (){
         window.removeEventListener("scroll", this.handleScroll)
     }
}
</script>