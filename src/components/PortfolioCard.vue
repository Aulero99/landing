<template>
  <div class="repo-container fill" :id="repo.name + 'card'">

    <div class="cover-img">
      <div class="img-container"
      :style="{
        'background-image':'url('+ setImage(repo) +')',
        'transform':'translate3d(0px,' + bgBtm + 'px, 0px)'
        }"
      >
      </div>
    </div>

    <div class="card-container fill">
      <div class="content-gateway flex-col justify-center align-lg-center fill-y px-3"
      :class="{'align-start':(index%2) == 0, 'align-end':(index%2) == 1}">

        <div class="card flex-col align-center justify-between elevation-3 br-1">
          <img class="logo p-3" :src="repo.logo" :alt="repo.name">
          
          <p class="description grow-1 flex-col justify-center pb-3 m-0 px-3">
            {{repo.description}}
          </p>
          
          <div class="links flex-row justify-around align-end fill-x p-3">
              <LinkButton v-if="repo.github" :ident="repo.name" icon="src/assets/img/icons/github.png" :link="repo.github" />
              <LinkButton v-if="repo.url" :ident="repo.name" cta="http://" :link="repo.url" />
          </div>

          <div class="tech flex-row justify-start p-3">
            <div class="icon me-2" v-for="t in repo.tech" :key="t" >
              <TechIcon :icon="t"/>
            </div>
          </div>
  
        </div>

      </div>
    </div>
  </div>
</template>
  
<script>
import { onBeforeMount, onMounted, ref } from 'vue'
import { scrollService } from '../services/ScrollService'
import { AppState } from '../AppState'
  export default {
    props:{
      repo: {type:Object, required:true},
      index: {type:Number, required:false}
    },
    setup(props) {
      let longest = null
      let bgBtm = ref(0) 
      const breakpoint = AppState.breakPoint
      
      function getParams(){
        let h = window.screen.height
        let w = window.screen.width
          if(h > w){ 
            longest = h 
          }else{
            longest = w
          }
      }

      function activateScrollEvents(){
        if(window.screen.width <= breakpoint){
          return
        }
        if(scrollService.inboundsCheck(`${props.repo.name}card`)){
          let percent = scrollService.percentBasedOnTop(`${props.repo.name}card`)
          const vh = window.innerHeight
          bgBtm.value = ((0.6 * vh) * percent)
        }
      }

      onMounted(()=>{
        window.addEventListener('scroll', activateScrollEvents);
        window.addEventListener('resize', getParams);
      })
      onBeforeMount(()=>{
        getParams();
      })

      return {
        bgBtm,
        longest,
        setImage(rep){
          if(longest > 1080){
            return rep.img
          }
          if(longest > 600 && longest <= 1080){
            return rep.img1080
          }
          if(longest > 300 && longest <= 600){
            return rep.img600
          }
          return rep.img300
        },
        breakpointMet(){
          if (longest < breakpoint){
            return true
          }
          return false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.repo-container{
  position: relative;
  height: calc($vh100 + 3rem);
  width: 100%;
}
.card-container{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.card{
  width: clamp(200px, 60%, 800px);
  max-height: 85%;
  aspect-ratio: 7/9;
  background-color: $bg;
  overflow: hidden;
}
.cover-img{
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .img-container{
      position: absolute;
      top: calc($vh100 * -0.1);
      left: calc(-0.05 * $vw100);
      right: calc(-0.05 * $vw100);
      margin-right: auto;
      margin-left: auto;
      height: calc($vh100 + (0.35 * $vh100) );
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: center;
      background-size: cover;
      background-position-x: center;
    }
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
  overflow: hidden;
}
.tech{
  background-color: darken($bg, 20%);
  height: 12%;
  width: 100%;
  overflow-y: hidden;
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
  min-height: 15%;
}
@media screen and ($minmax: $lg){
  .card{
    width: clamp(200px, 90%, 800px);
    height: 85%;
    aspect-ratio: 7/9;
  }
}

</style>