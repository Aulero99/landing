<template>
    <div class="left-nav-container flex-row justify-end"
    @mouseenter="setActive()"
    @mouseleave="setInactive()">
        <div class="logo-container elevation-3 flex-col justify-center"
        :class="{active:active}">
            <img src="../assets/img/logo.svg" alt="Logo" class="elevation" title="Contact Me">
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue'
  export default {
    props:{

    },
    setup() {
    const active = ref(false)
      return {
        active,
        setActive(){ active.value = true },
        setInactive(){ active.value = false }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.left-nav-container{
    background-color: $bg;
    border-radius: 0.15rem;
    position: fixed;
    z-index: 1000;
    width: calc($nav-width * 2);
    top: $navpad;
    left: calc($nav-width * -1);
    transition: all $trans1 ease-in-out;
        .logo-container{
            padding: 0.4rem 0.4rem 0.4rem 0;
            position: relative;
            cursor: pointer;
            transition: all $trans1 ease-in-out;
            width: $nav-width;
            aspect-ratio: 1/1;
            &::after{
                content: '';
                position: absolute;
                top: 0.4rem;
                left: 0;
                height: calc(100% - 0.8rem);
                width: 0%;
                z-index: -1;
                background-color: $main1;
                transition: all $trans1 ease-in-out;
            }
            img{
                max-width: 100%;
                margin: 0.4rem;
            }
            &.active{
                &::after{
                    width: calc(100% - 0.4rem);
                }
            }
        }
}

</style>