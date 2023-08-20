<template>
<div class="landing-container fill">
  <div class="layer layer-one">
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
  </div>

  <div 
  class="layer layer-two d-lg-none">
  <div class="one left flex-row justify-center">
    <div class="triangle"></div>
  </div>

  <div class="two right flex-row justify-center">
    <div class="triangle"></div>
  </div>
  </div>

  <div 
  class="layer layer-three">
    <div class="one center flex-row justify-center">
      <h1>HELLO</h1>
    </div>
  </div>
  
  <div 
  class="layer layer-four">

    <div class="center one flex-row justify-center">
      <div class="triangle"></div>
    </div>

  </div>

  <div 
  class="layer layer-five">

    <div class="one">
      <h1>
        THERE
      </h1>
    </div>

  </div>
</div>
</template>
  
<script>
import { onMounted, ref } from 'vue'
import { logger } from '../utils/Logger'


  export default {
    setup() {
      let bgBtm = ref(0) 
      let xPos = ref(0)
      let yPos = ref(0)

      // NOTE this function sets the xPos value between -1 and 1 with 0
      // being the center of the screen, this value can then be used to 
      // animate elements on the page. It will also attempt to stop if
      // the device is touch only, but that code may be borked since
      // I do not have a way to accurately test it ATM
      function activateMouseEvents(e){
          const touch = !!('ontouchstart' in window) || (!!('onmsgesturechange' in window) && !!window.navigator.maxTouchPoints);
          if(touch){
            xPos.value = 0
            yPos.value = 0
            return
          }
          const w = window.innerWidth
          const h = window.innerHeight
          const x = e.screenX
          const y = e.screenY
          const rec = document.getElementById('landing')
          xPos.value = -1 + (2 * (x/w))
          yPos.value = -1 + (2 * (y/h))
          // logger.log(w,h)
          logger.log(rec?.getBoundingClientRect())
          logger.log(x,y)
          // logger.log(xPos.value, yPos.value)
      }

      onMounted(()=>{
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
@import "../assets/scss/_variables.scss";


// NOTE local variables for ease of use
$text-position: calc(0.4 * $vh100);
$h1-size-local: clamp(6rem, calc(1/10 * $vw100), 20rem);

h1{
  line-height: 0;
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
  width: $vw100;
  left: calc(-1 * $vw100);
  right: calc(-1 * $vw100);
  margin: auto;
}
.left{
  position: absolute;
  width: $vw100;
  left: calc(-1 * $vw100);
  right: calc(-1 * $vw100);
  margin-left: calc(1.66 * $vw100);
  margin-right: auto;
}
.right{
  position: absolute;
  width: $vw100;
  left: calc(-1 * $vw100);
  right: calc(-1 * $vw100);
  margin-right: calc(1.66 * $vw100);
  margin-left: auto;
}
.layer{
  user-select: none;
  height: $vh100;
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(-1 * $vw100);
  right: calc(-1 * $vw100);
  display: grid;
}
.landing-container{
  z-index: -1;
  position: fixed;
}
.layer-one{
  width: $vw100;
  left: 0 !important;
  right: 0 !important;
  display: grid;
  background: linear-gradient(
        235deg, 
        adjust-hue(darken($main1, 20%), 15deg) 0%, 
        darken(adjust-hue($main1, 35deg), 70%) 25%, 
        darken($main1, 98%) 75%);
    .one{
      z-index: 5;
      position: absolute;
      top: 0;
      right: calc(0.38 * $vw100);
      width: 100%;
      aspect-ratio: 16/17;
      // filter: drop-shadow(80px -30px 30px adjust-hue(lighten($main1, 10%), 25deg));
      // animation: landing-layer-one-one $animTime infinite;
        &::after{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          clip-path: polygon(0% 95%, 0% 0%, 100% 0%);
          background: linear-gradient(
            235deg, 
            adjust-hue(lighten($main1, 5%), -40deg) 0%, 
            $main1 15%, 
            darken($main1, 98%) 40%);
          }
    }
    .two{
      z-index: 4;
      position: absolute;
      top: 0;
      right: 0;
      width: 110%;
      aspect-ratio: 16/17;
      // filter: drop-shadow(80px -30px 30px adjust-hue(lighten($main1, 10%), 25deg));
      // animation: landing-layer-one-two $animTime infinite;
        &::after{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          clip-path: polygon(0% 95%, 0% 0%, 100% 0%);
          background: linear-gradient(
            235deg, 
            lighten($main1, 5%)  0%, 
            adjust-hue(darken($main1, 3%), 18deg) 2%, 
            adjust-hue(darken($main1, 38%), 12deg) 35%, 
            darken($main1, 98%) 60%);
          }
    }
    .three{
      z-index: 3;
      position: absolute;
      top: 0;
      right: calc(-0.1 * $vw100);
      margin: auto;
      width: 150%;
      aspect-ratio: 16/17;
      // filter: drop-shadow(80px -30px 30px adjust-hue(lighten($main1, 10%), 25deg));
      // animation: landing-layer-one-three $animTime infinite;
      &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        clip-path: polygon(0% 95%, 0% 0%, 100% 0%);
        background: linear-gradient(
          235deg, 
          adjust-hue(darken($main1, 3%), 15deg) 0%, 
          darken(adjust-hue($main1, 35deg), 20%) 25%, 
          darken($main1, 98%) 50%);
      }
      
    }
}
.layer-two{
  z-index: 10;
    .one{
        height: calc(0.5 * $vh100);
        justify-self: center;
        align-self: flex-end;
        bottom: 0;
          .triangle{
            background: $main1-gradient1
          }
      }
      .two{
        height: calc(0.5 * $vh100);
        justify-self: center;
        align-self: flex-end;
        bottom: 0;
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
      height: calc(0.35 * $vh100 + ( 4 * $h1-size-local));
      max-height: (calc(0.85 * $vh100));
      justify-self: center;
      align-self: flex-end;
      bottom: 0;
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