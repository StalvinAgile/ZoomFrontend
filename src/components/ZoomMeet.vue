<template>
  <v-app>
    <v-card class="meet-card" elevation="5">
      <img
        width="150px"
        src="https://us04st1.zoom.us/static/6.0.5527/image/new/ZoomLogo.png"
        alt="ZOOm"
      />
      <v-divider></v-divider>
      <v-text-field
        v-model="userName"
        class="meeting-input-fields"
        label="Enter your Name"
        solo
        rounded
      ></v-text-field>
      <v-text-field
        v-model="meetingNumber"
        class="meeting-input-fields"
        label="Enter Meeting Id"
        solo
        rounded
      ></v-text-field>
      <v-btn class="join-meeting" @click="getSignature" color="primary">
        Join Meeting
      </v-btn>
    </v-card>
  </v-app>
</template>

<script>
// import axios from "axios";
import { ZoomMtg } from "@zoomus/websdk";

export default {
  name: "HelloWorld",
  created() {
    ZoomMtg.setZoomJSLib("https://source.zoom.us/2.3.0/lib", "/av");
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();
    // loads language files, also passes any error messages to the ui
    ZoomMtg.i18n.load("en-US");
    ZoomMtg.i18n.reload("en-US");
  },
  mounted() {
    ZoomMtg.inMeetingServiceListener("onUserJoin", (data) => {
      console.log("inMeetingServiceListener onUserJoin", data);
    });
  },
  data() {
    return {
      // This Sample App has been updated to use SDK App type credentials https://marketplace.zoom.us/docs/guides/build/sdk-app
      sdkKey: "g25ChIs8wiph3tG6n9pLoJ5qmjDf9dRygz31",
      leaveUrl: "https://zoom-trial.netlify.app/",
      meetingNumber: "71389417550",
      role: 0,
      signature:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJnMjVDaElzOHdpcGgzdEc2bjlwTG9KNXFtakRmOWRSeWd6MzEiLCJpYXQiOjE2NDgwMzQ5NzYsImV4cCI6MTY0ODA0MjE3NiwiYXBwS2V5IjoiZzI1Q2hJczh3aXBoM3RHNm45cExvSjVxbWpEZjlkUnlnejMxIiwidG9rZW5FeHAiOjE2NDgwNDIxNzZ9.OcFpNWye6KQRJLBON8hGUCijnmcfXtByRiRIZpGE00k",
      userEmail: "stalvinmm@gmail.com",
      userName: "",
      // pass in the registrant's token if your meeting or webinar requires registration. More info here:
      // Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/meetings#join-registered
      // Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/webinars#join-registered
    };
  },
  methods: {
    getSignature() {
      // axios.post(this.signatureEndpoint, {
      //   meetingNumber: this.meetingNumber,
      //   role: this.role
      // })
      // .then(res => {
      //   console.log(res.data.signature);
      //   this.startMeeting(res.data.signature);
      // })
      // .catch(error => {
      //   console.log(error);
      // });
      this.startMeeting(this.signature);
    },
    startMeeting(signature) {
      document.getElementById("zmmtg-root").style.display = "block";

      ZoomMtg.init({
        leaveUrl: this.leaveUrl,
        success: (success) => {
          console.log(success);
          ZoomMtg.join({
            signature: signature,
            sdkKey: this.sdkKey,
            userName: this.userName,
            meetingNumber: this.meetingNumber,
            passWord: this.passWord,
            success: (success) => {
              console.log(success);
            },
            error: (error) => {
              console.log(error);
            },
          });
        },
        error: (error) => {
          console.log(error);
        },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-text-field >>> input:focus {
  outline: 0px solid transparent !important;
}
.meet-card {
  margin: 10px 0px;
  width: 300px;
  padding: 20px;
}
.meeting-input-fields {
  width: 300px;
  margin: 0px !important;
}
.join-meeting {
  border-radius: 25px;
  width: 250px;
}
</style>
