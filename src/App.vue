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
    let width = 0

    function setParams(){
      const h = window.innerHeight
      const w = window.innerWidth
      width = w
      const navPad = 0.03 * h

      const root = document.querySelector(':root')
      const rootStyles = getComputedStyle(root)
      const vh = rootStyles.getPropertyValue('--vp-height')

      root.style.setProperty('--vp-height', `${h}px`)
      root.style.setProperty('--vp-width', `${w}px`)
      root.style.setProperty('--navpad', `${navPad}px`)

    }

    function updateParams(){
      // NOTE this is a fix to make mobile resizing not glitch the page
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
