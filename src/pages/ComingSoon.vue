<template>
  <div class="coming-soon-container">
    <img class="center-image" src="../assets/Evil-Tome-Coming-Soon.svg" alt="The Eye Will Open Soon"/>
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
.coming-soon-container {
  color: white;
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: #404041
}
.center-image {
  width: 75vw;
  max-width: 500px;
  display: inline-block;
  margin-top: 5vh;
}
.social-media-link {
  margin: 10px;
}
</style>
