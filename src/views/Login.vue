<template>
  <v-card class="side-container" width="550px">
    <v-row justify="center">
      <v-col cols="10">
        <v-row>
          <v-col class="my-7">
            <v-row align="center">
              <eug-logo></eug-logo>
              <p class="ml-4 display-2 pointer">EUG</p>
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
            <v-text-field
              v-model="inputUsername"
              type="text"
              label="Username"
            ></v-text-field>
            <v-text-field
              v-model="inputPassword"
              type="password"
              label="Password"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn :to="{ name: 'home' }" block large color="primary">
              Login
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="row-anchor">
              <a href="/create-account">Create account</a>
              <a href="/forgot-password">Forgot password?</a>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import eugLogo from '@/assets/eug_logo.svg';
export default {
  name: 'Login',
  components: { eugLogo },
  data() {
    return {
      inputUsername: null,
      inputPassword: null,
    };
  },
};
</script>

<style lang="scss">
.side-container {
  float: left;
  height: 100%;
  background-color: $login-form-background-color;
  padding: 40px;

  .content {
    padding-bottom: 30px;
    background: $login-form-background-color;
  }

  .row-anchor {
    display: flex;
    flex-direction: column;
  }
}
</style>
