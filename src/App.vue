<template>
  <div id="app">
    <div class="zoomcontainer">
      <v-container>
        <ZoomMeet />
      </v-container>
    </div>
  </div>
</template>

<script>
import ZoomMeet from "./components/ZoomMeet.vue";

export default {
  name: "App",
  components: {
    ZoomMeet,
  },
};
</script>
<style scoped>
.zoomcontainer{
  background-color: azure; 
}
</style>
