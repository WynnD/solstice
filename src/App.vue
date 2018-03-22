<template>
  <div class="ui container" id="app">
    <masthead/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    'masthead': Header
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  background-color: #F8F8F8;
}

@media only screen and (max-width:760px) {
  #app {
    margin: 0 !important;
  }
}

.segment .header {
  overflow: hidden;
  text-overflow: ellipsis;
}

.star.icon {
  color: #DD0;
}
</style>
