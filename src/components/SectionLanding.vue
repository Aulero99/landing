<template>
  <section class="row" id="landing">
      <div class="col-12 bg-main landing">
        <!-- <div class="content-gateway py-5 px-3 justify-end">
          <LandingCard/>
        </div> -->
        <!-- <LandingAnimation/> -->
        <LandingAnimationV2/>
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
.landing{
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>