import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router';
import store from './store/store';
import './api/axios';

Vue.config.productionTip = false
Vue.filter('currencyBRL', function (value) {

	const format = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
 
	return format;
  })

  
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
