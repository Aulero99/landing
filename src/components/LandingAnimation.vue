<template>
  <div class="landing-container">

    <div class="layer-1"
    >
        <div class="one"
        :style="{'transform':'translateY(' + (bgBtm * -5) + '%)'}"
        >
            <div class="triangle outline dark"></div>
        </div>
        <div class="two center-third"
        :style="{'transform':'translateY(' + (bgBtm * -5) + '%)'}"
        >
            <div class="triangle outline light inverted"></div>
        </div>
    </div>
    
    <div class="layer-2">
        <div class="one center-third flex-row justify-center align-center"
        :style="{'transform':'translateX(' + ((50 - (xPos * 100)) * 0.005) + '%)'}"
        >
            <h1>HELLO</h1>
        </div>
        <div class="two center-third"
        :style="{'transform':'translateX(' + ((50 - (xPos * 100)) * -0.02) + '%)'}"
        ></div>
        
    </div>

    <div class="layer-3"
    >        
        <div class="one center-third"
        :style="{'transform':'translateY(' + (bgBtm * -2) + '%)'}"
        >
            <div class="triangle gradient"></div>
        </div>
        <div class="two left-third"
        :style="{'transform':'translateX(' + (bgBtm * -2) + '%)'}"
        >
            <div class="triangle gradient"></div>
        </div>
        <div class="three right-third"
        :style="{'transform':'translateX(' + (bgBtm * 2) + '%)'}"
        >
            <div class="triangle gradient"></div>
        </div>
    </div>

    <div class="layer-4">
        <div class="one fill flex-row justify-center align-center"
        :style="{'transform':'translateX(' + ((50 - (xPos * 100)) * 0.007) + '%)'}"
        >
            <h1>
                I'M AUSTON
            </h1>
        </div>
    </div>
  </div>
</template>
  
<script>
import { onMounted, ref } from 'vue'
import { scrollService } from '../services/ScrollService'
import { logger } from '../utils/Logger'
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
            xPos.value = (x/w)
        }

        onMounted(()=>{
        window.addEventListener('scroll', activateScrollEvents);
        window.addEventListener('mousemove', activateMouseEvents)
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

.landing-container{
    height: 100vh;
    width: 100%;
    z-index: 1;
    overflow: hidden;
    position: relative;
    // background: linear-gradient(
    //             180deg, 
    //             darken($main1, 25%) 0%, 
    //             darken($main1, 45%) 50%, 
    //             darken($main1, 70%) 100%,
    //             );
    background-color: darken($main1, 50%);
}
.triangle{
    overflow: hidden;
    width: 100%;
    aspect-ratio: 1/1;
    position: absolute;
    bottom: 0;
        &::before{
            position: absolute;
            top: 65%;
            left: 15%;
            content: '';
            width: 70%;
            aspect-ratio: 1/1;
            transform: rotate(45deg);
            transform-origin: center;
        }
        &.inverted{
            transform: rotate(180deg);
            transform-origin: bottom;
            margin-bottom: 50%;
        }
        &.gradient{
            &::before{
                background: linear-gradient(
                135deg, 
                rgba(lighten($main1, 70%), 0.5) 0%, 
                rgba(lighten($main1, 15%), 0.45) 15%, 
                rgba($main1, 0.1) 35%,
                transparent 45%
                );
            }
        }
        &.outline{
            &.dark{
                &::before{
                    border: solid 0.15rem darken($main1, 20%);
                }
            }
            &.light{
                &::before{
                    border: solid 0.15rem lighten($main1, 20%);
                }
            }
        }
}
.line{
    width: 0.15rem;
    position: relative;
    height: 140%;
    margin-bottom: 50%;
    &.forty-five{
        transform: rotate(45deg);
        transform-origin: top;
    }
    &.light{
        background: linear-gradient(
                180deg, 
                transparentize(lighten($main1, 25%), 0) 0%, 
                lighten($main1, 25%), 
                transparentize(lighten($main1, 25%), 0) 100%,
                );
    }
}
.right-third{
    position: absolute;
    left: -500%;
    right: -566%;
    margin-left: auto;
    margin-right: auto;
}
.left-third{
    position: absolute;
    left: -566%;
    right: -500%;
    margin-left: auto;
    margin-right: auto;
}
.center-third{
    position: absolute;
    left: -500%;
    right: -500%;
    margin-left: auto;
    margin-right: auto;
}
.layer-2{
    z-index: 10;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
        .one{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
                h1{
                    font-size: 9rem;
                    color: #fff;
                    margin: 0 0 30% 0;
                    // background-color: rgba(invert($txt), 0.2);
                    padding: 0.5rem 2rem;
                    border-radius: 0.15rem;
                }
        }
}
.layer-1{
    z-index: 5;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
        .one{
            position: absolute;
            height: 100%;
            aspect-ratio: 2/1;
            bottom: -19%;
            left: -500%;
            right: -500%;
            margin-left: auto;
            margin-right: auto;
            .triangle{
                opacity: 80%;
            }
        }
        .two{
            height: 100%;
            aspect-ratio: 2/1;
            bottom: 5%;
            .triangle{
                opacity: 80%;
            }
        }
        .three{
            position: absolute;
            bottom: 10%;
            right: -500%;
            left: -500%;
            height: 10%;
            width: fit-content;
            margin-left: auto;
            margin-right: auto;
        }
}
.layer-3{
    z-index: 15;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
        .one{
            height: 80%;
            aspect-ratio: 2/1;
            bottom: -5%;
            .triangle{
                opacity: 80%;
                // &::before{
                //     backdrop-filter: blur(10px);
                //     -webkit-backdrop-filter: blur(10px);
                // }
            }
        }
        .two{
            height: 50%;
            aspect-ratio: 2/1;
            bottom: 10%;
            .triangle{
                opacity: 50%;
                // &::before{
                //     backdrop-filter: blur(10px);
                //     -webkit-backdrop-filter: blur(10px);
                // }
            }
        }
        .three{
            height: 50%;
            aspect-ratio: 2/1;
            bottom: 10%;
            .triangle{
                opacity: 50%;
                // &::before{
                //     backdrop-filter: blur(10px);
                //     -webkit-backdrop-filter: blur(10px);
                // }
            }
        }
}
.layer-4{
    z-index: 20;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    .one{
        h1 {
            color: $main1;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 3px;
            font-size: 6rem;
            margin: 0 0 -5% 0;
            text-shadow: 1% 1% 3% desaturate(rgba(invert($main1), 0.5), 100%);
            padding: 0.5rem 2rem;
            border-radius: 0.15rem;
        }
    }
}
</style>