<template>
  <v-card class="side-container" width="550px">
    <v-row justify="center">
      <v-col cols="10">
        <v-row>
          <v-col class="my-7">
            <v-row align="center">
              <eug-logo></eug-logo>
              <p class="ml-4 display-2">EUG</p>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="my-4">
            <span class="headline">Welcome back!</span>
            <br />
            <span class="ml-1 caption">You can login anytime.</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field  label="Username"></v-text-field>
            <v-text-field  label="Password"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn :ripple="false" block large color="primary">Login</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import eugLogo from "@/assets/eug_logo.svg";
export default {
  name: "Login",
  components: { eugLogo }
};
</script>

<style lang="scss">
.side-container {
  float: left;
  height: 100%;
  background-color: white;
  padding: 40px;

  .content {
    padding-bottom: 30px;
    background: white;
  }
}
</style>
