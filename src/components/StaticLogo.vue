<template>
    <div class="left-nav-container br-1 flex-row justify-end justify-lg-start"
    :class="{'nav-open':navOpen}"
    @mouseenter="setActive()"
    @mouseleave="setInactive()"
    @click="openNav(), scrollToContact()"
    >
        <div class="logo-container elevation-3 flex-col justify-center"
        :class="{active:active}">
            <img src="../assets/img/logo.svg" alt="Logo" class="elevation" title="Contact Me">
        </div>
    </div>

    <div class="nav-cover"
    :class="{'nav-open':navOpen, 'nav-closed':!navOpen}"
    @mouseenter="closeNav()"
    @click="closeNav()"
    > </div>
</template>
  
<script>
import { computed, onMounted, ref } from 'vue'
import { AppState } from '../AppState'
import jsons from '../variables.json'
import { parser } from '../utils/JSONParser'
  export default {
    setup() {
        const active = ref(false)
        const vars = parser.parseAll(jsons)
        const breakpoint = vars.lg
        
        function closeNav(){ 
            AppState.navOpen = false
            active.value = false 
        }
        
        onMounted(()=>{
            window.addEventListener('resize', closeNav)
        })

        return {
            active,
            breakpoint,
            navOpen: computed(()=> AppState.navOpen),
            setActive(){ 
                if(screen.width >= breakpoint){
                    active.value = true 
                }
            },
            setInactive(){ 
                if(screen.width >= breakpoint){
                    active.value = false
                } 
            },
            openNav(){
                if(window.screen.width <= breakpoint){
                    AppState.navOpen = true
                    active.value = true 
                }
            },
            closeNav(){
                if(window.screen.width <= breakpoint){
                    AppState.navOpen = false
                    active.value = false 
                }
            },
            scrollToContact(){
                if(window.screen.width > breakpoint){
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    const ap = AppState.activePage
                    // ap.orig = 'contact'
                    // ap.dest = 'contact'
                }
            }
        }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.nav-cover{
    display: block;
    opacity: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 0;
    background-color: rgba($color: #000000, $alpha: 0.7);
    z-index: 999;
        &.nav-open{
            transition: opacity $trans1 ease-in-out;
            height: 100vh;
            opacity: 1;
        }
        &.nav-closed{
            transition: opacity $trans1 ease-in-out, height 1ms linear $trans1;
        }
}
.left-nav-container{
    background-color: $bg;
    position: fixed;
    z-index: 1000;
    width: calc($nav-width * 2);
    top: $navpad;
    left: calc($nav-width * -1);
    transition: all $trans1 ease-in-out;
        &.nav-open{
            margin-right: $nav-width;
        }
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
@media screen and ($minmax: $lg){
    .left-nav-container{
        right: calc($nav-width * -1);
        left: auto;
            .logo-container{
                padding: 0.4rem 0rem 0.4rem 0.4rem;
                &::after{
                    left: auto;
                    right: 0;
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
}

</style>