<template>
  <section class="row" id="landing">
      <div class="col-12 landing">
        <LandingAnimation2/>
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


.landing{
  height: $vh100;
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>