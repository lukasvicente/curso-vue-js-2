<template>
  <v-card-stock
    :data="stock"
 
   />
</template>

<script>
import CardStock from '../components/CardStock.vue';

export default {
  name:'pageAction',
  components:{
    'v-card-stock':CardStock
  },
  computed:{
    stock(){
      return this.$store.state.stock;
    }
  }
 
}
</script>

<style>

</style>