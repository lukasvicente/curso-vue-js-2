import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    state:{
        liquidate: 10000,
        stock:[
            {id: 1, name: 'BMW', price: 149},
            {id: 2, name: 'Google', price: 99},
            {id: 3, name: 'Apple', price: 325},
            {id: 4, name: 'Twiter', price: 250},
            {id: 5, name: 'Nubank', price: 50}
        ],
        stockPortfolio:[
            
        ]
    },
    mutations:{
        addStockPortfolio(state, stockPortfolio){
            state.stockPortfolio.push(stockPortfolio);
        },
    },
    actions:{
        getStockPortfolio({commit}, payload){
            commit('addStockPortfolio', payload )
        }
    }
});