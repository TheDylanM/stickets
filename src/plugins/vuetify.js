import Vue from "vue";
import Vuetify from "vuetify/lib";
import { VCol } from 'vuetify/lib/components/index';

Vue.use(Vuetify);
Vue.component('v-col', VCol);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  }
});
