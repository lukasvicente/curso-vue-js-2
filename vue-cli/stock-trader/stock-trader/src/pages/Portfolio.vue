<template>

<div>
  <v-card-stock
    :data="stock"
    sale
   />
</div>

</template>

<script>
import CardStock from '../components/CardStock.vue';

export default {
   name:'portfolio',
   components:{
      'v-card-stock':CardStock
   },
   computed: {
      stock(){
         return this.$store.state.stockPortfolio;
      }
   }
}
</script>

<style>

</style>