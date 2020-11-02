<template>
  <v-app>
    <v-app-bar v-if="$store.getters.showFooter" fixed app>
      <v-btn icon to="/">
        <v-icon>mdi-keyboard-backspace</v-icon>
      </v-btn>
      <v-toolbar-title v-text="$store.getters.headerText" />
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer v-if="$store.getters.showFooter" :absolute="false" app>
      <v-row align="center" justify="center">
        <span
          class="caption text--center"
          v-html="
            `&copy; ${new Date().getFullYear()} - ${$store.getters.footerText}`
          "
        >
        </span>
      </v-row>
      <!-- Foto de Markus Spiske no Pexels -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
  beforeUpdate() {
    this.$store.dispatch("toogleHeaderAndFooter");
  },
};
</script>
