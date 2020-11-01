<template>
  <v-app
    class="local-body"
    :style="{ 'background-image': `url(${backgroundUrl})` }"
  >
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import backgroundUrl from "@/assets/bg.jpg";
export default {
  name: "App",

  data: () => ({
    backgroundUrl,
  }),
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
