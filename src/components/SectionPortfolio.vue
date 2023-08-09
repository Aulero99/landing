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
import { computed, onMounted } from 'vue'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
import { scrollService } from '../services/ScrollService'
  export default {
    setup() {
      return {
        portfolio: computed(()=>AppState.portfolio)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>