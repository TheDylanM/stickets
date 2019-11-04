<template>
  <v-container fluid class="justify-center fill-height">
    <v-card
      v-if="!isCreatingAccount"
      class="create-account-card py-6"
      width="575px"
    >
      <v-row justify="center" align="center">
        <v-col cols="7" class="text-center">
          <span class="headline">
            Create account
          </span>
          <v-text-field label="Full name"></v-text-field>
          <v-text-field label="Email"></v-text-field>
          <v-text-field label="Password"></v-text-field>
          <v-text-field label="Repeat password"></v-text-field>
          <v-btn block color="primary">Create</v-btn>
          <div class="text-left pt-2">
            <a href="#">Already have an account?</a>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <v-card v-else width="540px" class="creating-account-card pa-6">
      <v-row justify="end">
        <v-col class="shrink">
          <v-btn color="primary" text>
            Login
            <v-icon right>
              arrow_forward
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <v-row justify="center" align="center" class="mb-2">
            <v-progress-circular
              :size="40"
              color="primary"
              indeterminate
            ></v-progress-circular>
            <span class="ml-3 primary-color--text title">Loading</span>
          </v-row>
          <v-row>
            <v-col>
              <div class="some-text-container">
                <span>Redirecting you in a few minutes</span>
                <span>
                  We have send you an email, please press the confirmation link.
                </span>
                <a href="#">Didn't receive the email?</a>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'CreateAccount',
  data() {
    return {
      isCreatingAccount: true,
    };
  },
};
</script>

<style lang="scss">
.creating-account-card {
  .some-text-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
