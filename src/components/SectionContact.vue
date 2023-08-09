<template>
    <section class="row" id="contact">
        <div class="col-12">
          <div class="content-gateway justify-center align-center">
              <ContactForm/>
          </div>
        </div>
        <div class="col-12 bg-acct2 py-3 flex-row justify-between">
          <div class="copyright">
            <div class="container">
              <div class="row px-3 justify-between">

                <div class="col-4 my-3">
                  <h3>DESIGN</h3>
                  <ul>
                    <li>
                      Photoshop
                    </li>
                    <li>
                      Illustrator
                    </li>
                    <li>
                      Figma
                    </li>
                  </ul>
                </div>

                <div class="col-4 my-3">
                  <h3>PROGRAM</h3>
                  <ul>
                    <li>
                      Visual Studio Code
                    </li>
                    <li>
                      HTML
                    </li>
                    <li>
                      CSS
                    </li>
                    <li>
                      Javascript
                    </li>
                    <li>
                      Scss
                    </li>
                    <li>
                      C#
                    </li>
                    <li>
                      .NET
                    </li>
                    <li>
                      Node.js
                    </li>
                    <li>
                      Vue.js
                    </li>
                  </ul>
                </div>
                
                <div class="col-4 my-3">
                  <h3>PUBLISH</h3>
                </div>
                <div class="col-6 col-md-12 flex-row justify-start align-center py-3">
                  <img src="../assets/img/logo.svg" alt="logo" class="logo me-3">
                  © Copyright 2023 Auston Robertson.
                </div>
                <div class="col-4 col-md-12 flex-row justify-start justify-md-start align-center py-3">
                  <a href="https://github.com/Aulero99" target="blank">
                    <img src="../assets/img/icons/github.png" alt="Github" title="Github" class="social">
                  </a>
                  <a href="https://www.linkedin.com/in/auston-robertson-fullstack-dev/" target="blank">
                    <img src="../assets/img/icons/linkedin.png" alt="LinkedIn" title="LinkedIn" class="social">
                  </a>
                </div>
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
ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
.copyright{
  min-height: 20vh;
  width: calc(100% - $nav-width);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  margin-left: $nav-width;
  img{
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(309deg) brightness(104%) contrast(101%);
  }
}
.logo{
  height: 3rem;
  // filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(309deg) brightness(104%) contrast(101%);
}
.social{
  height: 2rem;
  transition: all $trans1 ease-in-out;
  margin: 0 0.4rem 0 0;
    &:hover{
      filter: invert(51%) sepia(98%) saturate(935%) hue-rotate(345deg) brightness(101%) contrast(101%);
    }
}
</style>