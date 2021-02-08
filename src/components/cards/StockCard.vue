<template>
  <v-card id="stock_card">
    <v-list-item two-line >
      <v-list-item-content>
        <v-list-item-title class="headline mb-2">
          {{ title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="80" v-bind:color="avatar_bg">
        <v-icon color="white"> {{ avatar_icon }}</v-icon>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "StockCard",
  props: ["title", "subtitle", "avatar_icon", "avatar_bg"],
};
</script>

<style>
</style>