<template>
  <v-navigation-drawer app>
    <v-menu-header />
    <v-divider></v-divider>
    <v-menu-list :itensMenu="itensMenu" />
       
    </v-navigation-drawer>
</template>

<script>
import MenuHeader from './MenuHeader.vue';
import MenuList from './MenuList.vue';

export default {
    components: {
        'v-menu-header': MenuHeader,
        'v-menu-list' : MenuList
    },
  data() {
    return {
      itensMenu: [
        {titulo: 'Início', icon: 'mdi-view-dashboard'},
        {titulo: 'Sobre', icon: 'mdi-forum'}
      ],
      
    }
  }
}
</script>

<style>

</style>