<template>
    <div class="button elevation-3 flex-col justify-center align-center fill mx-2" type="button" :title="'link to ' + ident">
        <a :href="link" target="blank" :title="ident" class="fill p-1 flex-col justify-center align-center">
            <img :src="icon" alt="ident" v-if="!cta"> 
            {{ cta }}
        </a>
    </div>
  
</template>
  
<script>
  export default {
    props:{
        link: {type: String, required: true},
        ident: {type: String, required: true},
        icon: {type: String},
        cta: {type: String}
    },
    setup() {
      return {
  
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

img{ height: 100%; }
.button{
    position: relative;
    max-width: 10rem;
    font-size: clamp(1rem, 3vw, 1.75rem);
    font-weight: 600;
    border-radius: 0.2rem;
    z-index: 100;
    overflow: hidden;
    border: 0.01rem solid $main2;
        a{
            position: relative;
            color: $txt;
            &::after{
                content: "";
                position: absolute;
                overflow: hidden;
                width: 5rem;
                height: 5rem;
                bottom: 0;
                left: -5rem;
                background-color: $main1;
                z-index: -2;
                transform: rotate(45deg);
                transform-origin: bottom left;
            }
            &::before{
                content: "";
                transition: all $trans2 ease-in-out;
                // background-color: $main1;
                position: absolute;
                z-index: -1;
                top: 0;
                left: 0;
                bottom: 0;
                right: -100%;
                border-right: 10rem solid transparent;
                border-bottom: 10rem solid $main1;
                transform: translateX(-100%);
            }
            &:hover{
                &::before{
                    transform: translateX(0);
                }
            }
        }
}
</style>