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
import { logger } from './utils/Logger';

export default {
  setup(){
    
    function lockToPortrait(){
      logger.log('locked to portait')
      screen.orientation.lock('portrait');
    }

    onMounted(()=>{
      window.addEventListener('scroll', scrollPositionUpdate);
      lockToPortrait()
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
// @import "https://cdn.jsdelivr.net/gh/Aulero99/small_grid@main/min/min_grid.css";

</style>
