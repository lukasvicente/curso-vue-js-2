<template>
  <v-toolbar>
    <!-- MOBO -->
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title class="mr-2"> <b>STOCK</b>TRADER </v-toolbar-title>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn to="/" flat> Inicio </v-btn>
      <v-btn to="/portfolio" flat> Portfolio </v-btn>
      <v-btn to="/stocks" flat> Ações </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn @click="finishDay" flat>Finalizar dia</v-btn>

      <v-btn @click="onSave" flat>Salvar</v-btn>
      <v-btn @click="onReload" flat>Carregar </v-btn>

      <v-btn flat>Saldo {{ liquidate | currencyBRL}}</v-btn>
      
    </v-toolbar-items>
  </v-toolbar>
  
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  computed:{
    liquidate(){
      return this.$store.state.liquidate;
    },
  },
  methods:{
    ...mapMutations(['addStockPortfolio']),
    async clear(){
      
      await this.$http.delete('stockPortfolio.json')
      await this.$http.delete('stock.json')
      await this.$http.delete('liquidate.json')
    },
    onReload(){
      this.$http.get('stockPortfolio.json').then(resp => {
        const { data } = resp;
        const stockPortfolio = Object.values(data)[0]
        const format = Object.values(stockPortfolio)[0]
        this.$store.state.stockPortfolio = format;

      })

      this.$http.get('stock.json').then(resp => {
        const { data } = resp;
        const stockPortfolio = Object.values(data)[0]
        const format = Object.values(stockPortfolio)[0]
        this.$store.state.stock = format;

      })

      this.$http.get('liquidate.json').then(resp => {
        const { data } = resp;
        const liquidate = Object.values(data)[0]
        this.$store.state.liquidate = Object.values(liquidate)[0];
      })
  
    },
    async onSave(){
      await this.clear();
      const stockPortfolio = this.$store.state.stockPortfolio;
      const stock = this.$store.state.stock;
      const liquidate = this.$store.state.liquidate;

      try {

        this.$http.post('stockPortfolio.json', {
           stockPortfolio
        }) 
  
        this.$http.post('stock.json', {
           stock
        }) 
  
        this.$http.post('liquidate.json', {
           liquidate
        })

        alert('Salvo com sucesso!')
       
      } catch (error) {
        alert('Erro ao salvar')
      }
      

    },
    priceRandom(value){
      const min = Math.floor(value - 10);
      const max = Math.floor(value + 10);
 
      return Math.floor(Math.random() * (max - min)) + min;
    },
    alterPrice(id, price){
      const stockPortfolio = this.$store.state.stockPortfolio;
      const find = stockPortfolio.find((value) => value.id === id )
      if(find){
        find.price = price;
      }
      
    },
    finishDay(){
      const stock = this.$store.state.stock;
 
      const newStock = stock.map( value => {
        
        const price = this.priceRandom(value.price);
        this.alterPrice(value.id, price)
        return {
            id: value.id,
            name: value.name,
            price
          }
       })
      this.$store.state.stock = newStock
 
    }
  }
};
</script>

<style>
.unLink {
  text-decoration: none;
  color: inherit;
}
</style>