<template>
  <div
    class="local-body"
    :style="{ 'background-image': `url(${backgroundUrl})` }"
  >
    <v-container>
      <v-row justify="center" align="center" style="height:100vh">
        <v-col cols="11" sm="6" md="5" lg="4" xl="3">
          <v-card>
            <v-card-title>
              <v-row justify="center" align="center">
                <v-card color="transparent" flat class="mt-n15">
                  <v-avatar size="150">
                    <v-img alt="Jhonatan Morais photo" :src="image" />
                  </v-avatar>
                </v-card>
              </v-row>
            </v-card-title>

            <v-card-text class="pa-4">
              <div class="text-center display-1 ">
                Jhonatan Morais
              </div>
              <div class="text-center title ">
                Full stack Developer
              </div>
              <div class="text-center caption mb-7  ">
                PHP | Laravel | VueJS | ReactJS
              </div>
              <div class="text-center">
                <v-btn
                  v-for="(item, i) in items"
                  :key="i"
                  :href="item.path"
                  icon
                  class="mx-2"
                >
                  <v-icon v-text="item.icon" :color="item.color"></v-icon>
                </v-btn>
              </div>
              <div class="text-center mt-10 ">
                <v-btn color="blue darken-1" outlined to="/portfolio">
                  Portfolio
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import jhonatanImage from "@/assets/jhonatan-circle-cropped.png";
import backgroundUrl from "@/assets/bg.jpg";
export default {
  name: "Home",
  data() {
    return {
      backgroundUrl,
    };
  },
  computed: {
    image() {
      return jhonatanImage;
    },

    items() {
      return [
        {
          icon: "mdi-github",
          text: "GitHub",
          path: "https://github.com/getJv",
          color: "blue darken-1",
        },
        {
          icon: "mdi-linkedin",
          text: "Linkedin",
          path: "https://www.linkedin.com/in/jhonatan-morais/?locale=en_US",
          color: "blue darken-3",
        },
        {
          icon: "mdi-twitter",
          text: "Twitter",
          path: "https://twitter.com/getjv",
          color: "blue lighten-3",
        },
        {
          icon: "mdi-pdf-box",
          text: "Resume",
          path:
            "https://raw.githubusercontent.com/getJv/getjv.github.io/master/.github/docs/resume.pdf",
          color: "red darken-3",
        },
        {
          icon: "mdi-email",
          text: "E-mail me",
          path: "mailto:jhonatanvinicius@gmail.com",
          color: "cyan darken-3",
        },
      ];
    },
  },
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
