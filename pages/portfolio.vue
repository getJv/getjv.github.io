<template>
  <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card :color="item.color"  dark>
        <v-card-title class="headline">
            <div class="title font-weight-light" >{{ item.name }}</div>
        </v-card-title>

         <v-card-subtitle>created on {{ item.date | formatDate }}</v-card-subtitle>
         <v-divider></v-divider>
        <v-card-text class="pa-3" >

          <div class="subtitle-2">
            {{ item.description }}
          </div>


        </v-card-text>
        <v-card-actions>
          <v-btn
            outlined
            :href="item.url"
          >
            Go Repository
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import axios from 'axios'
import moment from 'moment';

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
              icon: 'mdi-github',
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
      items: [],
    }),
    filters:{
      formatDate(value){
        return moment(String(value)).format('YYYY-MM-DD hh:mm')
      }
    }
  }
</script>

