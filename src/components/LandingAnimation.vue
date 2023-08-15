<template>
  <div class="layer layer-one">
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
  </div>

  <div 
  class="layer layer-two"
  :style="{'transform':'translateY(' + (bgBtm * 4) + '%) ' 
  + 'translateX(' + ((50 - (xPos * 100)) * 0.005) + '%)'}"
  >
  <div class="one left flex-row justify-center"
  :style="{'transform':'translateX(' + (bgBtm * -0.5) + '%)'}"
  >
    <div class="triangle"></div>
  </div>

  <div class="two right flex-row justify-center"
  :style="{'transform':'translateX(' + (bgBtm * 0.5) + '%)'}"
  >
    <div class="triangle"></div>
  </div>
  </div>

  <div 
  class="layer layer-three"
  :style="{'transform':'translateY(' + (bgBtm * 2) + '%) ' 
  + 'translateX(' + ((50 - (xPos * 100)) * 0.0075) + '%)'}"
  >
    <div class="one center flex-row justify-center">
      <h1>CREATIVE</h1>
    </div>
  </div>
  
  <div 
  class="layer layer-four"
  :style="{'transform':'translateY(' + (bgBtm * 3) + '%) ' 
  + 'translateX(' + ((50 - (xPos * 100)) * 0.01) + '%)'}"
  >

    <div class="center one flex-row justify-center">
      <div class="triangle"></div>
    </div>

  </div>

  <div 
  class="layer layer-five"
  :style="{'transform':'translateY(' + (bgBtm * 2) + '%) ' 
  + 'translateX(' + ((50 - (xPos * 100)) * 0.015) + '%)'}"
  >

    <div class="one">
      <h1>
        POTENTIAL
      </h1>
    </div>

  </div>
</template>
  
<script>
import { onMounted, ref } from 'vue'
import { scrollService } from '../services/ScrollService'

  export default {
    setup() {
      let bgBtm = ref(0) 
      let xPos = ref(0)

      function activateScrollEvents(){
        // position logic goes here
        if(scrollService.inboundsCheck(`landing`)){
            let percent = scrollService.percentBasedOnTop(`landing`)
            bgBtm.value = (40 * percent)
        }
      }

      function activateMouseEvents(e){
          let w = window.innerWidth
          let x = e.screenX
          // xPos.value = (x/w)
      }

      onMounted(()=>{
        window.addEventListener('scroll', activateScrollEvents);
        window.addEventListener('mousemove', activateMouseEvents);
      })

      return {
        bgBtm,
        xPos
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

// NOTE local variables for ease of use
$text-position: calc(0.4 * $vh100);
$h1-size-local: clamp(3rem, 14vw, 9.5rem);

h1{
  line-height: 1;
  margin: 0;
  font-size: $h1-size-local;
}

.triangle{
  height: 100%;
  aspect-ratio: 12/9;
  clip-path: polygon(0% 100%, 50% 0%, 50% 0%, 100% 100%);
  user-select: none;
}
.center{
  position: absolute;
  width: 100vw;
  left: -100vw;
  right: -100vw;
  margin: auto;
}
.left{
  position: absolute;
  width: 100vw;
  left: -100vw;
  right: -100vw;
  margin-left: 166vw;
  margin-right: auto;
}
.right{
  position: absolute;
  width: 100vw;
  left: -100vw;
  right: -100vw;
  margin-right: 166vw;
  margin-left: auto;
}
.layer{
  user-select: none;
  height: $vh100;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -100vw;
  right: -100vw;
  display: grid;
}
.layer-one{
  width: 100vw;
  left: 0 !important;
  right: 0 !important;
  display: grid;
  background: linear-gradient(
        235deg, 
        adjust-hue(darken($main1, 20%), 15deg) 0%, 
        darken(adjust-hue($main1, 35deg), 70%) 25%, 
        darken($main1, 98%) 75%);
    // .test{
    //   z-index: 1;
    //   height: 100%;
    //   width: 100%;
    //   top: 0;
    //   left: 0;
    //   position: absolute;
    //   // background-color: darken($main1, 50%);
    //   background-image: url('https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ');
    //   background-size: cover;
    // }
    .one{
      z-index: 5;
      position: absolute;
      top: 0;
      right: 38vw;
      height: 100%;
      aspect-ratio: 16/17;
      background: linear-gradient(
        235deg, 
        adjust-hue(lighten($main1, 5%), -40deg) 0%, 
        $main1 35%, 
        darken($main1, 98%) 60%);
      clip-path: polygon(0% 95%, 0% 0%, 100% 0%);
    }
    .two{
      z-index: 4;
      position: absolute;
      top: 0;
      right: 0;
      background: linear-gradient(
        235deg, 
        lighten($main1, 5%)  0%, 
        adjust-hue(darken($main1, 3%), 18deg) 10%, 
        adjust-hue(darken($main1, 38%), 12deg) 35%, 
        darken($main1, 98%) 60%);
      height: 125%;
      aspect-ratio: 16/17;
      clip-path: polygon(0% 95%, 0% 0%, 100% 0%);
    }
    .three{
      z-index: 3;
      position: absolute;
      top: 0;
      right: -11vw;
      margin: auto;
      background: linear-gradient(
        235deg, 
        adjust-hue(darken($main1, 3%), 15deg) 0%, 
        darken(adjust-hue($main1, 35deg), 20%) 25%, 
        darken($main1, 98%) 75%);
        height: 100%;
      aspect-ratio: 16/17;
      clip-path: polygon(0% 95%, 0% 0%, 100% 0%);
    }
}
.layer-two{
  z-index: 10;
    .one{
        height: calc(0.4 * $vh100);
        justify-self: center;
        align-self: flex-end;
        bottom: 0;
        margin-bottom: calc(0.12 * $vh100);
          .triangle{
            background: $main1-gradient1
          }
      }
      .two{
        height: calc(0.4 * $vh100);
        justify-self: center;
        align-self: flex-end;
        bottom: 0;
        margin-bottom: calc(0.12 * $vh100);
          .triangle{
            background: $main1-gradient1;
          }
      }
}
.layer-three{
  z-index: 15;
    .one{
      margin-bottom: calc($text-position + $h1-size-local);
      justify-self: center;
      align-self: flex-end;
      bottom: 0;
        h1{
          color: white;
        }
    }
}
.layer-four{
  z-index: 20;
  .one{
      height: calc(0.6 * $vh100);
      justify-self: center;
      align-self: flex-end;
      bottom: 0;
      margin-bottom: calc(0.08 * $vh100);
        .triangle{
          background: $main1-gradient2;
          backdrop-filter: blur(10px);
        }
    }
}
.layer-five{
  z-index: 25;
    .one{
      margin-bottom: $text-position;
      justify-self: center;
      align-self: flex-end;
        h1{
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 2px $main1;
        }
    }
}
</style>