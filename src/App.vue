<template>
  <div class="container">
    <section class="row flex-row">
      <nav class="elevation-3">
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
    
    onMounted(()=>{
      window.addEventListener('scroll', scrollPositionUpdate);
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
      appState: computed(() => AppState)
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
// @import "https://cdn.jsdelivr.net/gh/Aulero99/small_grid@main/min/min_grid.css";

</style>
