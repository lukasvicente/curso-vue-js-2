<template>
  <div>
    <v-layout>
      <v-flex>
        <v-layout row wrap>
          <v-card-stock-item 
            v-for="item in data" 
            :key="item.id" 
            :stock="item"
            :sale="sale"
            />
          <h2 v-if="!hasData">Nenhum dado encontrado!</h2>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import CardStockItem from "./CardStockItem.vue";

export default {
    name:'cardStock',
    components: {
    "v-card-stock-item": CardStockItem,
    },
    props:{
        data:{
            type: Array,
            default:null
        },
        sale:{
            type: Boolean,
            default: false
        }
    },
    computed:{
        hasData(){
            return this.data.length > 0 ? true : false;
        }
    }
    
};
</script>

<style>
</style>