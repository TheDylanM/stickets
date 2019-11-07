<template>
  <v-app>
    <!--    <v-app-bar app>-->
    <!--      <v-toolbar-title class="headline text-uppercase">-->
    <!--        <span>Smarter tickets</span>-->
    <!--      </v-toolbar-title>-->
    <!--    </v-app-bar>-->

    <v-content :class="{ 'bckg-img': showBackgroundImage }">
      <side-navigation-bar v-if="isLoggedIn"></side-navigation-bar>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import '@/scss/styling.scss';
import SideNavigationBar from './components/base/SideNavigationBar';
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  components: { SideNavigationBar },
  data: () => ({
    //
  }),
  mounted() {
    // this.$router.push({ name: 'createAccount' });
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
    showBackgroundImage() {
      return (
        this.$route.name === 'login' || this.$route.name === 'createAccount'
      );
    },
  },
};
</script>

<style>
.bckg-img {
  background-image: url('assets/side_background.png');
}
</style>
