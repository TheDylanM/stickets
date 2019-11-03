<template>
  <v-app>
<!--    <v-app-bar app>-->
<!--      <v-toolbar-title class="headline text-uppercase">-->
<!--        <span>Smarter tickets</span>-->
<!--      </v-toolbar-title>-->
<!--    </v-app-bar>-->

    <v-content class="content">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
  import '@/scss/styling.scss'
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  }),
  mounted() {
    this.$router.push({name: 'login'})
  }
};
</script>

<style>
.content{
    background-image: url("assets/side_background.png");
}
</style>
