<template>
  <div>
    <center>
    <img
      class="text-center"
      alt="Jhonatan Morais photo"
      src="https://github.com/getJv/getjv.github.io/blob/master/.github/workflows/images/jhonatan-circle-cropped.png?raw=true"
    >

  </center>

    <div class="text-center display-1 ">
      Jhonatan Morais
    </div>
    <div class="text-center title ">
      Full stack developer
    </div>
    <div class="text-center caption mb-7  ">
      Laravel | Springboot | VueJS | Flutter
    </div>

     <div  class="text-center">
       <v-btn v-for="(item, i) in items" :key="i" :href="item.path" icon  class="mx-2 ">
        <v-icon v-text="item.icon" :color="item.color"></v-icon>
      </v-btn>
     </div>

    <div  class="text-center mt-10 ">
       <v-btn color="blue darken-1" outlined to="/portfolio" >
        Portfolio
      </v-btn>
     </div>
    <div  class="text-center mt-10" >
       <v-btn text small to="about-me">
        About me
      </v-btn>
     </div>
  </div>

</template>
<script>

//  import jhonatanImage from '~/static/jhonatan-circle-cropped.png'

export default {
  name: 'JhonatanLogo',

  computed: {

    items() {
      return [
        {
          icon: 'mdi-github',
          text: 'GitHub',
          path: 'https://github.com/getJv',
          color: 'blue darken-1'
        },
        {
          icon: 'mdi-linkedin',
          text: 'Linkedin',
          path: 'https://www.linkedin.com/in/jhonatan-morais/?locale=en_US',
          color: 'blue darken-3'
        },
        {
          icon: 'mdi-twitter',
          text: 'Twitter',
          path: 'https://twitter.com/getjv',
          color: 'blue lighten-3'
        },
      ];
    }
  }

}
</script>

<style>

.nunito{
  font-family: 'Nunito', sans-serif;
}

.nunito .nunito-800{
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
}

</style>
