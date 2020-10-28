<template>
  <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card>
        <v-card-title :class="item.color" class="white--text">
            <div class="title">{{ item.name }}</div>
        </v-card-title>
        <v-card-text class="ma-2">
          <div class="subtitle"> created on {{ item.date }}</div>
          <div class="body-2 mt-3">
            {{ item.description }}
          </div>


        </v-card-text>
        <v-card-actions>
          <v-btn
            outlined
            :color="item.color"
            :href="item.url"
          >
            Repository
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import axios from 'axios'

  export default {
    created(){
      this.getData()
    },
    methods:{
      async getData(){
        var { data } = await axios.get("https://api.github.com/users/getjv/repos?per_page=100&type=owner");

         data.forEach(item => {
          var  splitedDescription = item.description ? item.description.split('||') : []
          if(splitedDescription.length > 1){
            this.items.push( {
              type: 'portfolio',
              color: 'purple darken-1',
              icon: 'mdi-book-variant',
              name: item.name,
              description: splitedDescription[0],
              url: item.html_url,
              date: item.created_at,
              tags: splitedDescription[1].toLowerCase().replace(/ /g,'').split(';')
            });

          }


        });

        //console.log(result)
        return data;
      }
    },
    data: () => ({
      items: [
       /*  {
          color: 'red lighten-2',
          icon: 'mdi-star',
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
        }, */
      ],
    }),
  }
</script>

