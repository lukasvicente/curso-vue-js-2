<template>
  <v-app>
    <v-menu />
    <v-header />
    <v-carousel />
    <v-footer />
  </v-app>
</template>

<script>
import Menu from './components/Menu.vue';
import Header from './components/Header.vue';
import Carousel from './components/Carousel.vue';
import Footer from './components/Footer.vue';

export default {
  components:{
    'v-menu': Menu,
    'v-header': Header,
    'v-carousel': Carousel,
    'v-footer': Footer
  },

}
</script>
