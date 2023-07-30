<template>
  <div class="coming-soon">
    <span class="coming-soon-logo-container" :style="backgroundImageStyle"/>
    <span class="social-media-links">
      <h3>Follow Us</h3>
      <a class="social-media-link" href="https://facebook.com/EvilTomeGames">Facebook</a>
      <a class="social-media-link" href="https://twitter.com/EvilTomeGames">Twitter</a>
    </span>       
  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
  props: {
    msg: String
  },
  computed: {
    backgroundImage(){
      return require("../assets/ComingSoonLogo.png");
    },
    backgroundImageStyle(){
      return {backgroundImage: "url(" + this.backgroundImage + ")"};
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0px 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.coming-soon {
  color: white;
  min-height: 100vh;
  position: relative;
}
.coming-soon-logo-container {
  width: 500px;
  height: 550px;
  display: inline-block;
  background-size: 500px;
  margin-top: 100px;
}
.social-media-link {
  margin: 10px;
}
</style>
