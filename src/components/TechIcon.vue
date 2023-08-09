<template>

  <img :title="icon" src="../assets/img/icons/vue.png" alt="Vue" v-if="icon == 'Vue'">
  <img :title="icon" src="../assets/img/icons/dotnet.png" alt=".Net" v-if="icon == '.Net'">
  <img :title="icon" src="../assets/img/icons/sass.png" alt="Sass" v-if="icon == 'Sass'">
  <img :title="icon" src="../assets/img/icons/auth0.png" alt="Auth0" v-if="icon == 'Auth0'">
  <img :title="icon" src="../assets/img/icons/mysql.png" alt="MySql" v-if="icon == 'MySQL'">
  <img :title="icon" src="../assets/img/icons/nodejs.png" alt="Node Js" v-if="icon == 'Node Js'">
  <img :title="icon" src="../assets/img/icons/html.png" alt="HTML 5" v-if="icon == 'HTML'">
  <img :title="icon" src="../assets/img/icons/css.png" alt="CSS" v-if="icon == 'CSS'">
  <img :title="icon" src="../assets/img/icons/javascript.png" alt="Javascript" v-if="icon == 'Javascript'">

</template>
  
<script>
  export default {
    props:{
        icon:{type:String, required:true}
    },
    setup() {
      return {
  
      }
    }
  }
</script>

<style lang="scss" scoped>
img{
    height: 100%;
}
</style>