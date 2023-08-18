<template>
    <a href="https://github.com/Aulero99" title="My Github" target="blank">
        <div class="social-container">
            <div class="grayscale">
                <img src="../assets/img/github.svg" alt="Github">
            </div>
            <div class="color">
                <img src="../assets/img/github.svg" alt="Github">
            </div>
        </div>
    </a>
</template>
  
<script>
  import vars from '../variables.json'
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
@import "../assets/scss/_variables.scss";
.social-container{
    display: block;
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    cursor: pointer;
    .grayscale{
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
        z-index: 1;
        transition: all $trans2 ease-in-out;
            img{
                width: 100%;
            }
    }
    .color{
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
        // filter: invert(30%) sepia(66%) saturate(2033%) hue-rotate(177deg) brightness(90%) contrast(101%);
            img{
                filter: invert(38%) sepia(14%) saturate(1838%) hue-rotate(222deg) brightness(89%) contrast(85%);
            }
    }
    &::before{
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 0.5rem;
        background-color: #6e5494;
        transition: all $trans2 ease-in-out;
        border-radius: $br1;
    }
    &:hover{
        .grayscale{
            height: 0%;
        }
        &::before{
            top: 0;
        }
    }
}
</style>