<template>
  <div>
    <v-navigation-drawer app permanent>
      <router-link to="/about" exact>
        <v-img src="@/assets/vue_display.jpg" alt="" width="100%"> </v-img>
      </router-link>
      <v-list shaped>
        <v-list-item-group v-model="selectedMenu" mandatory color="success">
          <v-list-item
            v-for="([icon, title, route], index) in menus"
            :key="index"
          >
            <v-list-item-icon>
              <v-icon large color="teal darken-2">{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                {{ title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedMenu: 0,
      menus: [
        ["mdi-apps-box", "Stock", "/stock"],
        ["mdi-chart-areaspline", "Report", "/report"],
        ["mdi-message-text", "About", "/about"],
      ],
    };
  },
};
</script>

<style></style>
