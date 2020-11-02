<template>
  <div class="portfolio pa-3">
    <v-overlay v-if="$store.getters.loadingPortfolio">
      <v-row justify="center" align="center" class="mb-5">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-row>
      <v-row justify="center" align="center">
        <span v-if="$store.getters.loadingGitRepositories">
          Git Repositories loading ...
        </span>
        <span v-else> Git Repositories ready! </span>
      </v-row>
      <v-row justify="center" align="center">
        <span v-if="$store.getters.loadingGitIssues">
          Git issues loading ...
        </span>
        <span v-else> Git issues ready! </span>
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
                {{ $store.getters.portfolioItemsSize }} results)
              </small>
            </center>
            <div class="captain mt-5">
              Tags by domain area
            </div>
            <v-divider></v-divider>
            <span v-for="item in $store.getters.domainTags" :key="item.tag">
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
            <div class="captain mt-5">
              Tags by technologies
            </div>
            <v-divider></v-divider>
            <span v-for="item in $store.getters.techTags" :key="item.tag">
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
          :key="`${item.name}-${i}`"
          :color="item.color"
          :icon="item.icon"
          fill-dot
        >
          <v-component
            :is="item.type"
            :smallScreen="smallScreen"
            :item="item"
          />
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>

<script>
import gitRepository from "@/components/GitRepository";
import gitIssues from "@/components/GitIssues";
import gitPull from "@/components/GitPr";

export default {
  components: {
    gitRepository,
    gitIssues,
    gitPull,
  },
  created() {
    this.$store.dispatch("fetchGitRepositories");
    this.$store.dispatch("fetchGitIssues");
    this.$store.dispatch("fetchGitPullRequests");
  },

  computed: {
    portfoliItems() {
      if (this.filters.length === 0) return this.$store.getters.portfolioItems;
      var wantedList = [];
      this.filters.forEach((filter) => {
        this.$store.getters.portfolioItems.forEach((porfolioItem) => {
          if (porfolioItem.tags.some((tag) => tag === filter)) {
            if (
              !wantedList.find((filtered) => filtered.name == porfolioItem.name)
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

    randomTimer() {
      return Math.floor(Math.random() * 3000 + 3000);
    },
  },
  data: () => ({
    filters: [],
  }),
};
</script>
<style scoped>
.portfolio {
  background-color: #fff;
  margin: 0 auto;
}
</style>
