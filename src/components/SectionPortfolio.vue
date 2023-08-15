<template>
    <section class="row" id="portfolio">
        <div class="col-12">
          <div v-for="(r, index) in portfolio" :key="r.name">
            <PortfolioCard :repo="r" :index="index"/>
          </div>
        </div>
    </section>
</template>
  
<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
  export default {
    setup() {
      return {
        portfolio: computed(()=>AppState.portfolio)
      }
    }
  }
</script>