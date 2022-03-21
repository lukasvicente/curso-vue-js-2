<template>
  <div class="mr-4 mb-4">
    <v-toolbar :color="colorTypeCard" dark>
      <v-toolbar-title>
        {{stock.name}} <span class="title font-weight-light">( Preço: {{stock.price | currencyBRL}} 
           {{ hasQuantity(stock.quantity)}} ) </span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>

    <v-card>
      <v-container fluid grid-list-md>
        <v-layout>
          <v-text-field
            type="number"
            v-model.number="count"
            label="Quantidade"
            required
            :min="0"
          ></v-text-field>
          <v-btn :disabled="disabled" @click="onSave" color="success">{{textTypeButton}}</v-btn>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'
export default {
    props:{
        stock:{
            type: Object,
            required: true
        },
        sale:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            count:0,
            disabled:true
        }
    },
    methods:{
      ...mapMutations(['addStockPortfolio']),
        buyAction(findStockPortfolio, valueCountForPrice){
          
          const liquidate = this.$store.state.liquidate;

          const data = {
            id: this.stock.id,
            name: this.stock.name,
            price: this.stock.price,
            quantity: this.count 
          }

          if(liquidate < valueCountForPrice){
            alert('Saldo insuficiente para comprar esta ação!')
            return;
          }
 
          if(findStockPortfolio){

            findStockPortfolio.price = this.stock.price;
            findStockPortfolio.quantity =  findStockPortfolio.quantity + this.count;
            
            this.liquidate = this.$store.state.liquidate - valueCountForPrice;
            this.count = 0;

          }else{
            this.addStockPortfolio( data );

            this.$store.state.liquidate = this.$store.state.liquidate - valueCountForPrice;
            this.count = 0;

          }
        },
        saleAction(findStockPortfolio, valueCountForPrice){

          
          if(this.count <= findStockPortfolio.quantity){
            findStockPortfolio.quantity = findStockPortfolio.quantity -  this.count;
            this.$store.state.liquidate = this.$store.state.liquidate + valueCountForPrice;
            this.count = 0;
            
            if(findStockPortfolio.quantity === 0){
                const removeIndex = this.stockPortfolio.findIndex( item => item.id === this.stock.id );
                this.stockPortfolio.splice( removeIndex, 1 );

            }

          }else{
            alert('Numero da quantidade de ação invalida!');
          }
        },
        onSave(){
          const findStockPortfolio =  this.stockPortfolio.find((value) => value.id === this.stock.id );
          const valueCountForPrice =  this.count * this.stock.price;

          if(this.sale){
            this.saleAction(findStockPortfolio, valueCountForPrice)
          }else{
            this.buyAction(findStockPortfolio, valueCountForPrice)
          }
        },
        hasQuantity(value){
            if(value){
                return `| Qtde: ${value}`;
            }
            return;
        }
    },
    computed:{
        textTypeButton(){
          return this.sale ? 'Vender' : 'Comprar'
        },
        colorTypeCard(){
          return this.sale ? 'info' : 'success'
        },
        stockPortfolio(){
          return this.$store.state.stockPortfolio;
        }
       
    },
    watch:{
        count(newValue){ 
            this.disabled = newValue >= 1 ? false : true;
        },
 
    }
};
</script>

<style>
</style>