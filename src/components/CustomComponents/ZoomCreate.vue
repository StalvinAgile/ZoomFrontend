<template>
  <v-app class="main-card">
    <v-card class="meet-card" elevation="5">
      <h2>Create a Meeting</h2>
      <v-divider></v-divider>
      <v-form ref="form">
        <div class="row">
          <div class="col-md-6">
            <v-text-field
              v-model="meeting.topic"
              label="Enter Topic"
              :rules="fieldRules"
            ></v-text-field>
          </div>
          <div class="col-md-6">
            <v-datetime-picker
              rounded
              label="Enter Datetime"
              v-model="meeting.start_time"
              dateFormat="yyyy-MM-dd"
              timeFormat="HH:mm:ss"
              :rules="fieldRules"
            >
            </v-datetime-picker>
          </div>
        </div>
        <v-btn
          @click="createMeeting"
          :loading="loading"
          :disabled="isDisable"
          class="create-meeting"
          color="primary"
        >
          Create
        </v-btn>
      </v-form>
    </v-card>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data: () => ({
    isDisable: false,
    loading: false,
    start_url: "",
    meeting: {
      topic: "",
      start_time: "",
    },
  }),

  methods: {
    createMeeting() {
      if (this.$refs.form.validate()) {
        this.isDisable = true;
        this.loading = true;
        axios
          .post(process.env.VUE_APP_API_URL_ADMIN + "meetings", this.meeting)
          .then((res) => {
            this.start_url = res.data.data.start_url;
            window.open(this.start_url,'_blank');
            this.isDisable = false;
            this.loading = false;
          });
      }
    },
  },
  computed: {
    fieldRules() {
      return [(v) => !!v || "Field is required"];
    },
  },
};
</script>
<style scoped>
.v-text-field >>> input:focus {
  outline: 0px solid transparent !important;
}
.meet-card {
  margin: 10px 0px;
  width: 400px;
  padding: 20px;
}
.meeting-input-fields {
  width: 300px;
  margin: 0px !important;
}
.create-meeting {
  border-radius: 30px;
  width: 100%;
  margin-top: 10px;
}
#app {
    width: 400px;
    margin: auto;
    text-align: center;
}
</style>
