import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { VCol } from 'vuetify/lib/components/index';
import 'material-design-icons-iconfont/dist/material-design-icons.css'; // Ensure you are using css-loader

Vue.use(Vuetify);
Vue.component('v-col', VCol);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#078B75',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
        anchor: '#0097A7',
      },
    },
  },
});
