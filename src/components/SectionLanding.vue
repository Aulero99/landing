<template>
  <section class="row" id="landing">
      <div class="col-12 bg-main landing">
        <LandingAnimation/>
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

.landing{
  height: $vh100;
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>