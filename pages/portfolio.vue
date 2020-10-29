<template>
  <div>
    <v-overlay v-if="loading">
      <v-row justify="center" align="center" class="mb-5">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-row>
      <v-row justify="center" align="center">
        <span v-if="gitLoading"> Git Repositories loading ... </span>
        <span v-else> Git Repositories ready! </span>
      </v-row>
    </v-overlay>
    <v-timeline v-else align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card>
          <v-card-title :class="`${item.color}`">
            <div class="title font-weight-bold white--text">
              {{ item.name }}
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-subtitle>
            created on {{ item.date | formatDate }}
          </v-card-subtitle>

          <v-card-text class="">
            <carousel
              :per-page="1"
              autoplay
              centerMode
              loop
              :autoplayTimeout="randomTimer()"
              :speed="3000"
            >
              <slide>
                <div class="subtitle-2">
                  {{ item.description }}
                </div>
              </slide>
              <slide>
                <v-row justify="center" align="center">
                  <v-img
                    :max-width="200"
                    :src="
                      `${html_url}/biolotus-site/blob/master/.github/preview.gif?raw=true`
                    "
                  />
                </v-row>
              </slide>
            </carousel>
          </v-card-text>

          <v-card-actions>
            <v-btn small :color="item.color" outlined :href="item.url">
              Repository
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn small :color="item.color" outlined :href="item.url">
              Live Preview
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide
  },
  created() {
    this.getGitData();
  },
  computed: {
    loading() {
      return this.gitLoading;
    }
  },
  methods: {
    randomTimer() {
      return Math.floor(Math.random() * 3000 + 3000);
    },
    async getGitData() {
      var { data } = await axios.get(
        "https://api.github.com/users/getjv/repos?per_page=100&type=owner"
      );

      data.forEach(item => {
        var splitedDescription = item.description
          ? item.description.split("||")
          : [];
        if (splitedDescription.length > 1) {
          this.items.push({
            type: "portfolio",
            color: "purple darken-1",
            icon: "mdi-github",
            name: item.name,
            description: splitedDescription[0],
            url: item.html_url,
            homepage: item.homrpage,
            date: item.created_at,
            tags: splitedDescription[1]
              .toLowerCase()
              .replace(/ /g, "")
              .split(";")
          });
        }
      });

      //console.log(result)
      this.gitLoading = false;
      return data;
    }
  },
  data: () => ({
    items: [],
    gitLoading: true
  }),
  filters: {
    formatDate(value) {
      return moment(String(value)).format("YYYY-MM-DD hh:mm");
    }
  }
};
</script>
