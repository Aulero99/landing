<template>
    <button :title="ident" class="br-1">
        <a :href="link" target="blank" class="fill">
            <div class="background">
                <svg x="0px" y="0px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" role="img">
                    <polygon class="triangle" points="100,100 0,100 0,0 "/>
                </svg>
            </div>
            <div class="foreground">
                <img :src="icon" :alt="ident" v-if="!cta"> 
                {{ cta }}
            </div>
        </a>
    </button>
    <!-- NOTE The width must be equal to or greater than the height of the button -->
</template>
  
<script>
  export default {
    props:{
        link: {type: String, required: true},
        ident: {type: String, Required: true},
        icon: {type: String},
        cta: {type: String}
    },
    setup() {
      return {
  
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

// STUB Change these variables to set the parameters of the element 
$button-color: $main1;
$text-color: black;
$transition1: $trans3 ease-in-out;
$transition2: 50ms linear;

img{ height: 100%; }
.triangle{ fill:$button-color; }
.background{
    position: absolute;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    left: 0;
    bottom: 0;
    z-index: -2;
    height: 100%;
    width: 100%;
    svg{
            height: 50%;
            aspect-ratio: 1/1;
        }
}
.foreground{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
button{
    display: block;
    position: relative;
    padding: 0.5rem;
    border: 0;
    background: transparent;
    z-index: 2;
    overflow: hidden;
    width: 100%;
    max-width: 10rem;
    aspect-ratio: 2/1;
    font-size: clamp(1rem, 3vw, 1.75rem);
    font-weight: 600;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    cursor: pointer;
        a{
            color: $text-color;
            text-decoration: none;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        &::after{
            content: "";
            z-index: -1;
            position: absolute;
            right: 100%;
            top: 100%;
            width: 600%;
            aspect-ratio: 1/1;
            background-color: $button-color;
            transition: right $transition1, background-color $transition2;
            transform: rotate(45deg);
            transform-origin: top right;
        }
        &:hover{
            &::after{
                right: -100%;
            }
        }
        &:active{
            &::after{
                background-color: darken($button-color, 10%);
            }
        }
}
</style>