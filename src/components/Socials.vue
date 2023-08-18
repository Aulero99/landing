<template>
    <div class="flex-col fill justify-center align-center">
        <div class="limit-width">
            <h1>CONTACT</h1>
            <p>Need to get in touch? Drop by and give me a ring!</p>
        </div>
        <div class="limit-width px-lg-3 py-5 flex-row justify-around fill-x">
            <div class="social-sizing">
                <LinkedInSocial/>
            </div>
            <div class="social-sizing">
                <GithubSocial/>
            </div>
        </div>
    </div>
</template>
  
<script>
  import vars from '../variables.json'
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
@import "../assets/scss/_variables.scss";
.social-sizing{
    width: 35%;
    aspect-ratio: 1/1;
}
</style>