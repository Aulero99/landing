<template>
    <section class="row bg-primary" id="profile">
        <div class="col-12">
            <div class="content-gateway flex-col justify-center align-center">
              <div ref="profile" class="profile-intro limit-width fill py-5">
                <div ref="profileImg" class="profile-img d-lg-none">
                  <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" alt="">
                </div>
                <div ref="profileText" class="text p-lg-4">
                  <h1>I'M AUSTON</h1>
                  <p>
                    You can call me a full-stack developer, web experience designer, UI, UX, or any other industry title you like. I'm also a dedicated student of life with an arsenal of skills originating from my experience as a web designer, developer, writer, presenter, avid gamer, snowboard enthusiast, and more.
                  </p>
                  <p>
                    I don't like to limit myself to what I already know, rather I enjoy pushing boundaries. I often do this by incorporating something new into every application I make. I have an endless amount of curiosity that drives me to seek out new experiences. As such, I`m a fast learner, able to pick up new skills and roles with relative ease.
                  </p>
                  <p>
                    I also like to sharpen my skills through new opportunities with like-minded individuals. Whether it be as a leader or a teammate I am always eager to do what I can do to help make something amazing.
                  </p>
                  <p>
                    If I sound like the kind of person you are looking for, check out my <a class="slide reg" @click="openResume()">Resume</a>, get in touch with me on <a class="slide reg" href="https://www.linkedin.com/in/auston-robertson-fullstack-dev/" title="My LinkedIn" target="blank">LinkedIn</a> or check out my work over on <a class="slide reg" href="https://github.com/Aulero99" title="My Github" target="blank">Github</a>.
                  </p>
                </div>
              </div>

            </div>
        </div>
    </section>
</template>
  
<script>
import { onMounted, ref } from 'vue'
import { modals } from '../utils/ModalUtils'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import jsons from "../variables.json"
import { parser } from '../utils/JSONParser';

  export default {
    setup() {
      // gsap.registerPlugin(ScrollTrigger);
      const vars = parser.parseAll(jsons)

      const profile = ref(null)
      const profileText = ref(null)
      const profileImg = ref(null)

      onMounted(()=>{
        gsap.from(profileText.value.children,{
          scrollTrigger:{
            trigger:".profile-intro",
            id:"profile-intro",
            start:"top 60%",
            end:"top 20%",
            scrub: 2,
          },
          opacity: 0,
          x: "+60",
          stagger: 0.5
        })

        gsap.from(profileImg.value,{
          scrollTrigger:{
            trigger:".profile-intro",
            id:"profile-intro",
            start:"top 60%",
            end:"top 20%",
            scrub: 2,
          },
          opacity: 0,
          x: "-60",
        })
      })
      

      return {
        vars,
        profile,
        profileText,
        profileImg,
        openResume(){
           modals.open('resumeModal')
        },
        pastBreakpoint(){
          if(vars.lg > window.screen.width){
            return true
          }
          return false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.profile-intro{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  width: 100%;
    &.inbounds{
      opacity: 1;
    }
  .profile-img{
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: center;
    align-self: center;
      img{
        width: 100%;
      }
  }
  .text{
    width: 60%;
    height: 100%;
    align-self: center;
    p{
      text-align: left;
    }
  }
}

@media screen and ($minmax: $lg){
  .profile-intro{
    flex-direction: column;
    justify-content: center;
    .text{
      width: 100%;
      p{
        text-align: left;
      }
    }
  }
}
</style>