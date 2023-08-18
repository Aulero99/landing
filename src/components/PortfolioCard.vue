<template>
  <div ref="container" class="repo-container fill" :id="repo.name + 'card'">

    <div class="cover-img">
      <div class="img-container" ref="bgImage"
      :style="{
        'background-image':'url('+ repo.img +')'
        }"
      >
      </div>
    </div>

    <div class="card-container flex-row justify-center fill">
      <div class="content-gateway flex-col justify-start align-lg-center fill-y px-3 portfolio-gateway"
      :class="{'card-left':(index%2) == 0, 'card-right':(index%2) == 1}">

        <div ref="card" class="card flex-col align-center justify-between elevation-3 br-1">

          <div class="logo-container">
            <div class="background fill">
              <div class="color-fill" :style="{'background-color':repo.favColor}"></div>
              <svg x="0px" y="0px" viewBox="0 0 100 25" preserveAspectRatio="xMidYMid slice" role="img">
                <polygon class="triangle" points="0,0 100,0 0,25" :style="{fill:repo.favColor}"/>
              </svg>
            </div>
            <div class="foreground">
              <img class="logo p-3" :src="repo.logo" :alt="repo.name">
            </div>
          </div>
          
          <div class="description grow-1 flex-col justify-center pb-3 mt-2 px-3">
            <h2>{{ repo.name }}</h2>
            <div class="flex-row tech">
              <div v-for="t in repo.tech" :key="t" class="tech-heading"> {{ t }} </div>
            </div>
            <p class="">
              {{repo.description}}
            </p>
          </div>
          
          <div class="links flex-row justify-around align-end fill-x px-3 my-5">
              <LinkButton v-if="repo.github" :ident="repo.name" icon="src/assets/img/icons/github.png" :link="repo.github" />
              <LinkButton v-if="repo.url" :ident="repo.name" cta="http://" :link="repo.url" />
          </div>
  
        </div>

      </div>
    </div>
  </div>
</template>
  
<script>
import { onMounted, ref } from 'vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  props:{
    repo: {type:Object, required:true},
    index: {type:Number, required:false}
  },
  setup(props) {
      gsap.registerPlugin(ScrollTrigger);
      const bgImage = ref(null)
      const container = ref(null)
      const card = ref(null)
    let slide = 0

      function setLeftOrRight(){
        if(props.index % 2 == 0){
          slide = -20
        } else{
          slide = 20
        }
      }


      onMounted(()=>{
        gsap.from(bgImage.value,{
          scrollTrigger:{
            trigger:container.value,
            id:`${props.repo.name}`,
            start:"top bottom",
            end:"bottom top",
            scrub: true,
            delay:1
          },
          ease: "none",
          y: "-45%"
        })

        setLeftOrRight()

        gsap.from(card.value,{
          scrollTrigger:{
            trigger:container.value,
            id:`${props.repo.name}`,
            start:"top 70%",
            end:"top 30%",
            scrub: 1
          },
          opacity: 0,
          x: `${slide}%`
        })

      })

      return {
        bgImage,
        container,
        card
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.repo-container{
  position: relative;
  height: calc($vh100 * 1.1);
  width: 100%;
}
.card-container{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
    .card-left{
      align-items: flex-start;
    }
    .card-right{
      align-items: flex-end;
    }
}
.portfolio-gateway{
  max-width: 1500px;
}
.cover-img{
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .img-container{
      position: absolute;
      top: 0;
      left: calc(-0.05 * $vw100);
      right: calc(-0.05 * $vw100);
      margin-right: auto;
      margin-left: auto;
      height: calc($vh100 + (0.45 * $vh100) );
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: center;
      background-size: cover;
      background-position-x: center;
    }
}
.card{
  max-height: 75%;
  margin-top: $navpad;
  aspect-ratio: 7/11;
  background-color: $bg;
  overflow: hidden;
    .logo-container{
        height: 25%;
        width: 100%;
        position: relative;
          .background{
            position: absolute;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
              .color-fill{
                flex-grow: 1;
                border-radius: 0 0 0.15rem 0;
              }
              svg{
                margin-top: -1px;
              }
          }
          .foreground{
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
              .logo{
                  max-width: 50%;
                  max-height: 65%;
                  aspect-ratio: auto;
                  // max-height: 9rem;
              }
          }
    }
}
.description{
  display: flex;
  width: 100%;
  line-height: 1.5;
  text-align: left;
  overflow: hidden;
    .tech{
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: calc($fonts * 1.2);
      font-weight: 500;
      .tech-heading{
        display: block;
        &::after{
          content: '|';
          margin: 0 0.6rem;
        }
        &:last-child{
          &::after{
            content: '' !important;
          }
        }
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
    min-height: 88%;
  }
}

</style>