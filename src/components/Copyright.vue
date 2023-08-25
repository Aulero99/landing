<template>
<div class="limit-width copyright-section fill-y">
  <div class="flex-row justify-center align-center py-3 fill-y">
  <img src="../assets/img/logo.svg" alt="logo" class="logo me-3">
  © Copyright {{ year }} Auston Robertson.
  </div>
</div>
</template>

<script>
  export default {
    setup() {
      const year = new Date().getFullYear()
      return {
        year
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
.copyright-section{ 
  position: relative;
  color: white;
  img{
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(309deg) brightness(104%) contrast(101%);
  }
}
.logo{
  height: 3rem;
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