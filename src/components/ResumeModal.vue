<template>
  <dialog id="resumeModal" class="resume" :class="{open:open}">
    <div class="modal-body fill flex-col">
        <div class="options fill-x flex-row justify-end">
            <div type="button" @click="closeModal" class="close-button flex-col justify-center align-center">
              <svg version="1.1" x="0px" y="0px" viewBox="0 0 425.2 425.2" preserveAspectRatio="xMidYMid slice" role="img">
                <path d="M331.5,53L216.3,168.3c-2.6,2.6-6.7,2.6-9.3,0L91.7,53c-2.6-2.6-6.7-2.6-9.3,0L49.3,86.1c-2.6,2.6-2.6,6.7,0,9.3
                  l115.2,115.2c2.6,2.6,2.6,6.7,0,9.3L49.3,335.2c-2.6,2.6-2.6,6.7,0,9.3l33.1,33.1c2.6,2.6,6.7,2.6,9.3,0L207,262.3
                  c2.6-2.6,6.7-2.6,9.3,0l115.2,115.2c2.6,2.6,6.7,2.6,9.3,0l33.1-33.1c2.6-2.6,2.6-6.7,0-9.3L258.7,220c-2.6-2.6-2.6-6.7,0-9.3
                  L373.9,95.4c2.6-2.6,2.6-6.7,0-9.3L340.8,53C338.2,50.5,334.1,50.5,331.5,53z"/>
              </svg>

            </div>
        </div>
        <div class="resume-container fill p-2">
            <object data="src/assets/img/resume.pdf" type="application/pdf" width="100%" height="100%">
                <p>Unable to display PDF file. <a href="src/assets/img/resume.pdf">Download</a> instead.</p>
            </object>
        </div>
    </div>
  </dialog>
</template>
  
<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { modals } from '../utils/ModalUtils'
  export default {
    setup() {
      return {
        open: computed(()=> AppState.modalOpen),
        closeModal(){
            modals.close("resumeModal")
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";


.resume{
    transition: all $trans2 ease-in-out;
    border: 0;
    overflow: hidden;
    opacity: 0;
    height: calc((0.9 * $vh100));
    max-width: calc(0.95 * $vw100) !important;
    aspect-ratio: 9/12;
    &::backdrop{
        transition: all $trans2 ease-in-out;
        opacity: 0;
        background-color: rgba($color: #000000, $alpha: 0.65);
        backdrop-filter: blur(10px);
    }
    &.open{
        opacity: 1;
        &::backdrop{
            opacity: 1;
        }
    }
}
.close-button{
  position: relative;
  width: 5%;
  padding: 0;
  aspect-ratio: 1/1;
  overflow: hidden;
  display: block;
  margin: 0;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  &::before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    width: 100%;
    z-index: -1;
    border-radius: $br1;
    transition: all $trans1 ease-in-out;
    background-color: $main1;
  }
  svg{
    width: 100%;
    path{
      transition: all $trans1 ease-in-out;
      fill: #000000;
    }
  }
  &:hover{
    &::before{
      height: 100%;
    }
  }
}
.close-modal{
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
}
.resume-container{
    height: auto;
    flex-grow: 1;
}
</style>