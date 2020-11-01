<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({}),
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
