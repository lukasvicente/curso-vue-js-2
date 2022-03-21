<template>
  <div>
    <h1>Negocie e Consulte suas ações</h1>

    <div>
      <v-alert :value="true" type="info">
        Você pode salvar & carregar os dados
      </v-alert>

      <v-alert :value="true" type="success">
        Clique em 'Finalizar dia' para iniciar um novo dia!
      </v-alert>
      <v-divider class="mt-3"></v-divider>
      <h2 class="mt-5">Seu Saldo: {{ liquidate | currencyBRL}} </h2>
    </div>
    
    <v-menu bottom offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on">A Menu</v-btn>
        </template>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>teste</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

  </div>
</template>

<script>
export default {
  props: ['on'],
  computed:{
    liquidate(){
      return this.$store.state.liquidate;
    }
  },
    
};
</script>

<style>
</style>