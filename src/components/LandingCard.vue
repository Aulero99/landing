<template>
<div class="landing-card flex-col">
<div class="title">
    HELLO,
</div>
<div class="content flex-col px-1">
    <p class="my-1">
        I'm Auston.
    </p>
    <p class="my-1">
        Fullstack Developer.
    </p>
    <p class="my-1">
        Web Experience Designer.
    </p>
    <p class="my-1">
        Generally Likable Guy.
    </p>
</div>
</div>
</template>
  
<script>
  export default {
    props:{

    },
    setup() {
      return {
  
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.landing-card{
    color: $bg;
    .title{
        font-size: 10rem;
        font-weight: 500;
    }
    p{
        line-height: 1;
        padding: 0;
        font-size: 1.6rem;
    }
}
</style>