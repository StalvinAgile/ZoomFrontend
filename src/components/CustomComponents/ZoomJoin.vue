<template>
  <v-app>
    <v-card class="meet-card" elevation="5">
      <h2>Join Meeting</h2>
      <v-divider></v-divider>
      <a :href="meeting_data[present_url].join_url"><v-btn @click="btnvisible" :loading="loading" :disabled="isDisabled" class="join-meeting" color="primary">
        Join
      </v-btn></a>
    </v-card>
  </v-app>
</template>

<script>
import axios from "axios";
export default {

  data: () => ({
        meeting_data:[],
        loading: false,
        isDisabled:false,
        present_url:0
    }),

  mounted() {
    this.joinMeeting();
  },

  methods: {
    btnvisible(){
      this.isDisabled=true;
      this.loading=true;
    },
    joinMeeting() {
      axios
        .get(process.env.VUE_APP_API_URL_ADMIN+ "meetings")
        .then((res) => {
          this.meeting_data = res.data.data.meetings;
          console.log("join",this.meeting_data);
          this.initval = false;
        })
        .catch((err) => {
          this.initval = false;
          console.log(err);
        });
    },
  }
}
</script>
<style scoped>
.v-text-field >>> input:focus {
  outline: 0px solid transparent !important;
}
.meet-card {
  margin-top: 10px;
  width: 300px;
  padding: 20px;
  text-align: center;
}
.meeting-input-fields {
  width: 300px;
  margin: 0px !important;
}
.join-meeting {
  border-radius: 30px;
  width: 90%;
}
.join-meeting a{
  text-decoration: none;
  color: white;
}
</style>
