import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ui: {
      isLoggedIn: true,
      sideNavigationItems: [
        { title: 'Home', route: '', icon: 'mdi-home-city' },
        { title: 'Tickets', route: '', icon: 'mdi-account' },
        { title: 'Projects', route: '', icon: 'mdi-account' },
        {
          title: 'Analytics',
          route: '',
          icon: 'mdi-account-group-outline',
        },
      ],
      activeItem: 'Home'
    },
  },
  getters: {
    isLoggedIn: state => {
      return state.ui.isLoggedIn;
    },
    sideNavigationItems: state => {
      return state.ui.sideNavigationItems;
    },
    activeTab: state =>{
      return state.ui.activeItem
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
