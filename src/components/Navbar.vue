<template>
  <section class="navbar-content flex-row" @drag="shiftScrollElem('orig')">

    <div class="navlink landing flex-row justify-center align-center fill-y" 
    @click="scrollToEl('landing'), setScrollElem('landing')"
    @mouseenter="shiftScrollElem('landing')"
    @mouseleave="shiftScrollElem('orig')"
    :class="{active: active.dest == 'landing'}"
    >
        LANDING
    </div>

    <div class="navlink profile flex-row justify-center align-center fill-y" 
    @click="scrollToEl('profile'), setScrollElem('profile')"
    @mouseenter="shiftScrollElem('profile')"
    @mouseleave="shiftScrollElem('orig')"
    :class="{'active': active.dest == 'profile'}"
    >
      PROFILE
    </div>

    <div class="navlink portfolio flex-row justify-center align-center fill-y"
    @mouseenter="shiftScrollElem('portfolio'), portfolioOnHover()"
    @mouseleave="shiftScrollElem('orig'), portfolioOffHover()"
    :class="{'active': active.dest == 'portfolio'}"
    >
        <div class="fill flex-col justify-center align-center" 
        @click="scrollToEl('portfolio'), setScrollElem('portfolio')">
          WORK
        </div>
        <div class="items elevation-2" v-if="portfolio.length > 1"
          :class="{'h-0':!portfolioHover}">
          <div class="portfolio-link" v-for="p in portfolio" :key="p.name">
            <div class="fill p-2 flex-row justify-start"
            @click="scrollToEl(`${p.name}card`)">
              {{ p.name }}
            </div>
          </div>
        </div>
    </div>

    <div class="navlink contact flex-row justify-center align-center fill-y" 
    @click="scrollToEl('contact'), setScrollElem('contact')"
    @mouseenter="shiftScrollElem('contact')"
    @mouseleave="shiftScrollElem('orig')"
    :class="{'active': active.dest == 'contact'}"
    >
        CONTACT
    </div>

    <div class="scroll-element">
      <div class="block fill"></div>
    </div>

  </section>
</template>
  
<script>
import { computed, ref } from 'vue'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
  export default {

    setup() {
      const portfolioHover = ref(false)
      function turnOffPortfolioHover(){ portfolioHover.value = false }
      return {
        portfolioHover,
        active: computed(()=>AppState.activePage),
        portfolio: computed(()=>AppState.portfolio),

        scrollToEl(el){ document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' })},

        shiftScrollElem(value){
          const ap = AppState.activePage
          if(value == 'orig'){
            ap.dest = ap.orig
            ap.hover = false
          }else{
            ap.dest = value
            ap.hover = true
          }
        },

        setScrollElem(value){
          const ap = AppState.activePage
          ap.orig = value
          ap.dest = value
        },
        
        portfolioOnHover(){ portfolioHover.value = true },
        
        portfolioOffHover(){ setTimeout(turnOffPortfolioHover, 150) }

    }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.navbar-content{
    position: relative;
    transform: rotate(90deg);
    transform-origin: left top;
    margin-left: $nav-width;
    width: 100vh;
    color: $main2;
    height: $nav-width;
    padding: 0 $navpad;
}
.scroll-element{
    position: absolute;
    left: $navpad;
    width: calc(100% - 6vh);
    height: 45%;
    top: 5%; 
    z-index: -1;
    transition: padding-left $trans3 60ms, padding-right $trans3;
      .block{
        background-color: $main1;
        min-width: 6rem;
      }
}
.navlink{
    cursor: pointer;
    transition: all $trans1;
    position: relative;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
    width: 25%;
      &::before{
        content: '';
        z-index: -1;
        transition: all $trans1;
        width: 100%;
        height: 5%;
        background-color: $main2;
        position: absolute;
        top: 5%;
      }
      &.active{ 
        color: $txt; 
        &.landing{
          ~.scroll-element{ 
            padding-left: 0 !important;
            padding-right: 70.5% !important; 
          }
        }
        &.profile{
          ~.scroll-element{ 
            padding-left: 23.5% !important; 
            padding-right: 47% !important; 
          }
        }
        &.portfolio{
          ~.scroll-element{ 
            padding-left: 47% !important; 
            padding-right: 23.5% !important; 
          }
        }
        &.contact{
          ~.scroll-element{ 
            padding-left: 70.5% !important; 
            padding-right: 0 !important; 
          }
        }
      }
}
.portfolio{
  &:hover{
    .items{
      opacity: 1;
      padding: 0.4rem 0;
    }
  }
  .items{
    color: $main2;
    transition: all $trans1 ease-in-out 3ms;
    position: absolute;
    opacity: 0;
    top: 5rem;
    width: 100%;
    left: -100%;
    transform: rotate(-90deg);
    transform-origin: top right;
    background-color: $bg;
      .portfolio-link{
        position: relative;
        transition: all $trans2 ease-in-out;
        &::before{
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          display: block;
          z-index: -1;
          width: 0%;
          height: 100%;
          background-color: $main1;
          transition: all $trans2 ease-in-out;
        }
        &:hover{
          color: $txt;
          &::before{
            width: calc(100% - 0.4rem);
          }
        }
      }
  }
}
</style>