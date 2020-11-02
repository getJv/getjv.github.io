<template>
  <v-card>
    <v-card-title :class="`${item.color}`">
      <div class="title font-weight-bold white--text">
        {{ item.name }}
      </div>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-subtitle> created on {{ item.date | formatDate }} </v-card-subtitle>

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
</template>

<script>
import moment from "moment";
export default {
  name: "gitRepository",
  props: {
    item: {
      type: Object,
      required: true,
    },
    smallScreen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    tagInfo(tagName) {
      return (
        this.$store.getters.tags.find((item) => item.tag == tagName) || {
          tag: tagName,
          color: "cyan darken-2",
          icon: "mdi-label",
        }
      );
    },
  },
  data: () => ({
    startingServer: [],
  }),
  filters: {
    formatDate(value) {
      return moment(String(value)).format("YYYY-MM-DD hh:mm");
    },
  },
};
</script>

<style></style>
