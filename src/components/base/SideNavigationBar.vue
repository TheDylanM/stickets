<template>
  <v-navigation-drawer dark app permanent left class="side-navigation-bar">
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Name</v-list-item-title>
          <v-list-item-subtitle>some.user@email.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list class="list-item-color">
      <v-list-item
        :class="{ activeItem: item.title === activeTab }"
        v-for="item in items"
        :key="item.title"
        @click="goToRoute(item.route)"
      >
        <v-list-item-icon>
          <v-icon
            :class="{
              'primary-color--text': item.title === activeTab,
            }"
          >
            {{ item.icon }}
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title
            :class="{
              'primary-color--text': item.title === activeTab,
            }"
          >
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SideNavigationBar',
  computed: {
    ...mapGetters({ items: 'sideNavigationItems', activeTab: 'activeTab' }),
  },
  methods: {
    goToRoute(route) {
      // this.$router.push({ name: route });
    },
  },
};
</script>

<style scoped></style>
