<template>
  <dialog id="resumeModal" class="resume" :class="{open:open}">
    <div class="modal-body fill flex-col">
        <div class="options">
            dialogue open
            <button @click="closeModal">close</button>
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
@import "../assets/scss/main.scss";

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