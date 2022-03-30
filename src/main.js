import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import DatetimePicker from 'vuetify-datetime-picker'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.component('Zoom-Meet-Join', require('./components/CustomComponents/ZoomJoin.vue').default);
Vue.component('Zoom-Meet-Create', require('./components/CustomComponents/ZoomCreate.vue').default);

Vue.use(DatetimePicker)
Vue.use(VueAxios, axios)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
