<template>
    <section class="row bg-primary" id="contact">
        <div class="col-12">
          <div class="content-gateway justify-center align-center py-lg-4 my-lg-5">
              <ContactForm/>
          </div>
        </div>
      </section>

      <section class="row bg-secondary" id="copyright">
        <div class="col-12">
          <div class="content-gateway copyright-height align-center justify-center">
            <Copyright/>
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
@import "../assets/scss/_variables.scss";
.copyright-height{ min-height: calc(0.2 * $vh100) !important;}
</style>