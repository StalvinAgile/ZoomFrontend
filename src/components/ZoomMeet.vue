<template>
  <div id="zoom-app">
    <div class="HeadImage"><img width="150px" src="../assets/ZoomLogo.png" alt="ZOOM" /></div>
    <v-divider></v-divider>
    <div class="row" id="cardsection">
      <div class="col-md-3 ZoomCard">
        <Zoom-Meet-Join />
      </div>
      <div class="col-md-3 ZoomCard">
        <Zoom-Meet-Create />
      </div>
    </div>
  </div>
</template>
<style scoped>
.ZoomCard div{
  background-color: azure;
}
.HeadImage{
display: flex;
justify-content: center;
margin-top: 20px;
margin-bottom: 40px;
}
#cardsection{
justify-content: space-around;
}
</style>