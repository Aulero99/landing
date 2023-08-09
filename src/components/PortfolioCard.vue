<template>
  <div class="repo-container fill" :id="repo.name + 'card'">
    <div class="cover-img fill"
    :style='{ 
      "background-image": "url(" + repo.img + ")",
      "background-position-y": bgBtm + "vh"
      }'>
    </div>
    <div class="content-gateway fill-y px-3 card-container flex-col justify-center"
    :class="{'align-start':(index%2) == 0, 'align-end':(index%2) == 1}">
      <div class="card p-3 flex-col align-center justify-between elevation-3">

        <img class="logo" :src="repo.logo" :alt="repo.name">
        
        <p class="description">
          {{repo.description}}
        </p>
        
        <div class="tech flex-row wrap justify-around">
          <div class="icon" v-for="t in repo.tech" :key="t" >
            <TechIcon :icon="t"/>
          </div>
        </div>

        <div class="links flex-row justify-around align-end fill-x">
            <LinkButton v-if="repo.github" :link="repo.github" :ident="repo.name" icon="src/assets/img/icons/github.png"/>
            <LinkButton v-if="repo.url" :link="repo.url" :ident="repo.name" cta="http://"/>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { onMounted, ref } from 'vue'
import { logger } from '../utils/Logger'
import { scrollService } from '../services/ScrollService'
  export default {
    props:{
      repo: {type:Object, required:true},
      index: {type:Number, required:false}
    },
    setup(props) {
      let bgBtm = ref(0) 


      function activateScrollEvents(){
        // position logic goes here
        if(scrollService.inboundsCheck(`${props.repo.name}card`)){
          let percent = scrollService.percentBasedOnTop(`${props.repo.name}card`)
          bgBtm.value = (20 * percent * -1)
        }
      }

      onMounted(()=>{
        window.addEventListener('scroll', activateScrollEvents);
      })
      return {
        bgBtm
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.repo-container{
  position: relative;
  height: 105vh;
    .card-container{
      position: absolute;
      top: 0;
        .card{
          height: 75%;
          aspect-ratio: 7/9;
          background-color: $bg;
          border-radius: 0.15rem;
        }
    }
}
.cover-img{
  background-position-x: center;
  background-attachment: fixed;
  background-size: auto 135vh;
}
.logo{
    width: 50%;
    aspect-ratio: auto;
    max-height: 9rem;
}
.description{
  display: flex;
  width: 100%;
  line-height: 1.5;
  text-align: left;
  padding: 0.25rem 0;
  margin: 0;
}
.tech{
  height: 6%;
  width: 100%;
    .icon{
      filter: grayscale(100%);
      height: 100%;
      transition: all $trans1 ease-in-out;
        &:hover{
          filter: grayscale(0%) !important;
        }
    }
}
.links{
  display: flex;
  height: 15%;
}

</style>