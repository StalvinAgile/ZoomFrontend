<template>
  <div id="app">
    <ZoomMeet />
  </div>
</template>

<script>
import ZoomMeet from './components/ZoomMeet.vue'

export default {
  name: 'App',
  components: {
    ZoomMeet
  }
}
</script>

<style>
#app {
  width: 70%;
  margin: auto;
  text-align: center;
}
#zmmtg-root {
  display: none;
}
</style>