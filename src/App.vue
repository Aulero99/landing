<template>
  <div class="container">
    <section class="row flex-row">
      <nav class="elevation-3"
      :class="{'nav-open':navOpen}">
        <Navbar/>
      </nav>
      <StaticLogo/>
      <main class="col-fill">
        <div class="container">
            <SectionLanding/>
            <SectionProfile/>
            <SectionPortfolio/>
            <SectionContact/>
          </div>
      </main>
    </section>
  </div>
  <footer>
    <ResumeModal/>
  </footer>
</template>

<script>
// @ts-ignore
// @ts-ignore
import { computed, onMounted } from 'vue';
import { AppState } from './AppState';
import { scrollService } from './services/ScrollService';

export default {
  setup(){

    function setParams(){
      const h = window.innerHeight
      const w = window.innerWidth
      AppState.screenX = w
      AppState.screenY = h
      const navPad = 0.03 * h

      const root = document.querySelector(':root')

      root.style.setProperty('--vp-height', `${h}px`)
      root.style.setProperty('--vp-width', `${w}px`)
      root.style.setProperty('--navpad', `${navPad}px`)

    }

    function updateParams(){
      // NOTE this is a fix to make mobile resizing not glitch the page
      let width = AppState.screenX
      if(window.innerWidth != width){
        setParams()
      }
    }

    onMounted(()=>{
      window.addEventListener('scroll', scrollPositionUpdate);
      window.addEventListener('resize', updateParams);
      setParams()
    })
    
    function scrollPositionUpdate(){
      AppState.scrollPosition = window.scrollY
      if( AppState.activePage.hover != true){
        scrollService.sectionScrollUpdate('landing')
        scrollService.sectionScrollUpdate('profile')
        scrollService.sectionScrollUpdate('portfolio')
        scrollService.sectionScrollUpdate('contact')
      }
    }
    
    return{
      appState: computed(() => AppState),
      navOpen: computed(() => AppState.navOpen)
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
