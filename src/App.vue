<template>
  <div id="app">
    <ComingSoon/>
  </div>
</template>

<script>
import ComingSoon from './components/ComingSoon.vue'

export default {
  name: 'App',
  components: {
    ComingSoon
  }
}
</script>

<style>
html{
  height: 100%;
  background-color: #404041;
}
body{
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  position: relative;
  margin: 0px;
}
</style>
