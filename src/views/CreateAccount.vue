<template>
  <v-container fluid class="justify-center fill-height">
    <v-card class="create-account-card py-6" width="575px">
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
  </v-container>
</template>

<script>
export default {
  name: 'CreateAccount',
};
</script>

<style lang="scss"></style>
