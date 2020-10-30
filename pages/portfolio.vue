<template>
  <div class="portfolio pa-3">
    <v-overlay v-if="loading">
      <v-row justify="center" align="center" class="mb-5">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-row>
      <v-row justify="center" align="center">
        <span v-if="gitLoading"> Git Repositories loading ... </span>
        <span v-else> Git Repositories ready! </span>
      </v-row>
    </v-overlay>
    <div v-else>
      <v-expansion-panels hover focusable>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Filter by technologies
            <template v-slot:actions>
              <v-icon color="primary">$expand</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <center>
              <small>
                ({{ filters.length }} Filters,
                {{ portfoliItems.length }} results)
              </small>
            </center>
            <v-divider></v-divider>
            <span v-for="(item, index) in tagList" :key="index">
              <v-chip
                class="mx-2 mt-5"
                :color="item.color"
                label
                :outlined="!filters.includes(item.tag)"
                :text-color="!filters.includes(item.tag) ? item.color : 'white'"
                @click="toggleFilter(item.tag)"
              >
                <v-icon left> {{ item.icon }} </v-icon>
                {{ item.tag }}
              </v-chip>
            </span>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-row justify="center" align="center">
        <span v-if="!smallScreen" class="display-1 font-weight-light my-3">
          Jhonatan's Portfolio Timeline
        </span>
        <span v-else class="title font-weight-light my-3">
          Jhonatan's Portfolio Timeline
        </span>
      </v-row>
      <v-divider></v-divider>
      <v-timeline align-top :dense="smallScreen">
        <v-timeline-item
          v-for="(item, i) in portfoliItems"
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
              <div class="subtitle-2">
                {{ item.description }}
              </div>

              <v-row justify="center" align="center">
                <v-img
                  :max-width="smallScreen ? 200 : 350"
                  :src="`${item.url}/blob/master/.github/preview.gif?raw=true`"
                />
              </v-row>
              <v-row>
                <span v-for="(tag, index) in item.tags" :key="index">
                  <v-chip
                    v-if="tag && !smallScreen"
                    class="mx-2 mt-5"
                    :color="tagInfo(tag.trim()).color"
                    label
                    text-color="white"
                  >
                    <v-icon left> {{ tagInfo(tag.trim()).icon }} </v-icon>
                    {{ tag.trim() }}
                  </v-chip>
                </span>
              </v-row>
            </v-card-text>

            <v-card-actions>
              <v-btn small :color="item.color" outlined :href="item.url">
                Repository
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                v-if="item.homepage"
                small
                :color="item.color"
                outlined
                :loading="startingServer.includes(item.name)"
                @click="startingServer.push(item.name)"
                :href="item.homepage"
              >
                Live Preview
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  created() {
    this.getGitData();
  },

  computed: {
    portfoliItems() {
      if (this.filters.length === 0) return this.items;
      var wantedList = [];
      this.filters.forEach(filter => {
        this.items.forEach(porfolioItem => {
          if (porfolioItem.tags.some(tag => tag === filter)) {
            if (
              !wantedList.find(filtered => filtered.name == porfolioItem.name)
            ) {
              wantedList.push(porfolioItem);
            }
          }
        });
      });

      return wantedList;
    },
    smallScreen() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    loading() {
      return this.gitLoading;
    },
    tagList() {
      return this.tags.sort(function(a, b) {
        if (a.tag < b.tag) {
          return -1;
        }
        if (a.tag > b.tag) {
          return 1;
        }
        return 0;
      });
    }
  },
  methods: {
    toggleFilter(tagName) {
      var index = this.filters.indexOf(tagName);
      if (index > -1) {
        this.filters.splice(index, 1);
      } else {
        this.filters.push(tagName);
      }
    },
    tagInfo(tagName) {
      return (
        this.tags.find(item => item.tag == tagName) || {
          tag: tagName,
          color: "cyan darken-2",
          icon: "mdi-label"
        }
      );
    },
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
            homepage: item.homepage,
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
    filters: [],
    gitLoading: true,
    startingServer: [],
    tags: [
      {
        tag: "portfolio",
        color: "purple darken-1",
        icon: "mdi-github"
      },
      {
        tag: "interview-test",
        color: "cyan darken-2",
        icon: "mdi-lan-check"
      },
      {
        tag: "php",
        color: "blue darken-3",
        icon: "mdi-language-php"
      },
      {
        tag: "laravel",
        color: "orange darken-5",
        icon: "mdi-laravel"
      },
      {
        tag: "html",
        color: "orange darken-3",
        icon: "mdi-language-html5"
      },
      {
        tag: "typescript",
        color: "red darken-3",
        icon: "mdi-language-typescript"
      },
      {
        tag: "java",
        color: "blue-gray darken-3",
        icon: "mdi-language-java"
      },
      {
        tag: "javascript",
        color: "yellow darken-3",
        icon: "mdi-language-javascript"
      },
      {
        tag: "docker",
        color: "blue darken-1",
        icon: "mdi-docker"
      },
      {
        tag: "docker-compose",
        color: "blue darken-1",
        icon: "mdi-docker"
      },
      {
        tag: "css",
        color: "pink darken-1",
        icon: "mdi-language-css3"
      },
      {
        tag: "tailwind",
        color: "green darken-1",
        icon: "mdi-weather-windy-variant"
      },
      {
        tag: "vuetify",
        color: "blue darken-1",
        icon: "mdi-vuetify"
      },
      {
        tag: "reactjs",
        color: "blue darken-1",
        icon: "mdi-react"
      },
      {
        tag: "tdd",
        color: "red darken-1",
        icon: "mdi-test-tube"
      },
      {
        tag: "php-unit",
        color: "red darken-1",
        icon: "mdi-test-tube"
      },
      {
        tag: "vuejs",
        color: "green darken-3",
        icon: "mdi-vuejs"
      }
    ]
  }),
  filters: {
    formatDate(value) {
      return moment(String(value)).format("YYYY-MM-DD hh:mm");
    }
  }
};
</script>
<style scoped>
.portfolio {
  background-color: #fff;
  margin: 0 auto;
}
</style>
