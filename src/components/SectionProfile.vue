<template>
    <section class="row bg-standard " id="profile">
        <div class="col-12">
            <div class="content-gateway">
              <div class="profile-intro fill">
                <div class="profile-img">
                  <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" alt="">
                </div>
                <div class="text p-lg-4">
                  <p>
                    You can call me a full stack developer, web experience designer, experience engineer, UI, UX or any other industry title you like. I’m also a dedicated student of life with a large array of skills stemming from my experience as a web designer, developer, writer, presenter, avid gamer, snowboard enthusiast and more.
                  </p>
                  <p>
                    I don't like to limit myself to what I already know, rather I enjoy pushing the boundaries with what I can do by incorporating something new into every application I make. I have an endless amount of curiosity that drives me to seek out new experiences, which I weave into everything I do. As such, I`m a fast learner, able to pick up new skills and roles with relative ease. 
                  </p>
                  <p>
                    I also like to sharpen my skills through new opportunities with like-minded individuals. Whether it be as a leader, or a teammate I am always eager to what I can do to help make something amazing. 
                  </p>
                  <p>
                    If I sound like the kind of person you are looking for, check our my <a>Resume</a> or get in touch with me on <a href="https://www.linkedin.com/in/auston-robertson-fullstack-dev/" title="My LinkedIn" target="blank">LinkedIn</a> or fork me on <a href="https://github.com/Aulero99" title="My Github" target="blank">Github</a>.
                  </p>
                </div>
              </div>

            </div>
        </div>
    </section>
</template>
  
<script>
  export default {
    setup() {
      return {
  
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.profile-intro{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
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
a{
  display: inline-block;
  position: relative;
  z-index: 1;
  color: $txt;
  cursor: pointer;
  padding: 0 0.15rem;
  &::before{
    content: '';
    height: 10%;
    width: 100%;
    background: $main1;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    transition: all $trans1 ease-in-out;
  }
  &:hover{
    &::before{
      height: 100%;
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