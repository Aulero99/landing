<template>
    <!-- <svg x="0px" y="0px" viewBox="0 0 70 70" preserveAspectRatio="xMidYMid slice" role="img" class="triangle">
        <polygon points="0,70 70,70 35,0 "/>
    </svg> -->
    <div class="triangle"></div>
</template>
  
<script>
  export default {
    props:{

    },
    setup() {
      return {
  
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.triangle{
    height: 100%;
    aspect-ratio: 5/6;
    clip-path: polygon(0% 100%, 50% 0%, 50% 0%, 100% 100%);
    backdrop-filter: blur(10px);
    background-color: red;
    // polygon{
    //     fill: transparent;
    //     background: linear-gradient(
    //         rgba(224, 170, 255, 0.15) 0%, 
    //         rgba(90, 24, 154, 0.25) 50%, 
    //         rgba(16, 0, 43, 0.75) 100%
    //     );
    // }
}
.center{

}
.left{

}
</style>