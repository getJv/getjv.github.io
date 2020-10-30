<template>
  <v-app>
    <div
      class="local-body"
      :style="{ 'background-image': `url(${backgroundUrl})` }"
    >
      <v-navigation-drawer
        v-if="false"
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        app
      >
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar v-if="false" :clipped-left="clipped" fixed app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-btn icon @click.stop="miniVariant = !miniVariant">
          <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
        </v-btn>
        <!-- <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
        <!-- <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
        <v-toolbar-title v-text="title" />
      </v-app-bar>
      <v-main>
        <nuxt />
      </v-main>
      <v-footer v-if="false" :absolute="!fixed" app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
        <!-- Foto de Markus Spiske no Pexels -->
      </v-footer>
      <style></style>
    </div>
  </v-app>
</template>

<script>
import backgroundUrl from "~/assets/bg.jpg";
export default {
  data() {
    return {
      backgroundUrl,
      clipped: true,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/"
        },
        {
          icon: "mdi-apps",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: true,
      title: "Jhonatan Morais"
    };
  }
};
</script>
<style>
.local-body {
  height: 100%;
  width: 100%;
  background-repeat: repeat-x;
  background-position: center;
  background-size: cover;
  margin: 0;
  overflow: hidden; /* Hide scrollbars */
}
</style>
