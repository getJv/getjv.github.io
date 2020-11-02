<template>
  <v-row
    justify="center"
    align="center"
    style="height:100vh"
    class="local-body"
    :style="{ 'background-image': `url(${backgroundUrl})` }"
  >
    <v-card>
      <center class="mt-n15">
        <img class="text--center" alt="Jhonatan Morais photo" :src="image" />
      </center>
      <v-card-text class="pa-8">
        <div class="text-center display-1 ">
          Jhonatan Morais
        </div>
        <div class="text-center title ">
          Full Stack developer
        </div>
        <div class="text-center caption mb-7  ">
          Laravel | Springboot | VueJS | Flutter
        </div>
        <div class="text-center">
          <v-btn
            v-for="(item, i) in items"
            :key="i"
            :href="item.path"
            icon
            class="mx-2 "
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
  </v-row>
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
            "https://raw.githubusercontent.com/getJv/getjv.github.io/master/.github/resume.pdf",
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
