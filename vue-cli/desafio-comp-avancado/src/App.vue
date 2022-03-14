<template>
	<div id="app">
		<span>
			<button @click="clickComponents('Red') " class="vermelho">Carregar Componente Vermelho</button>
			<button @click="clickComponents('Green')" class="verde">Carregar Componente Verde</button>
			<button @click="clickComponents('Blue')" class="azul">Carregar Componente Azul</button>
		</span>
		<component :is="nameComponents"> <slot> {{ translator(nameComponents) }} </slot> </component>
		
	</div>
</template>

<script>
import Red from './components/Red.vue'
import Green from './components/Green.vue'
import Blue from './components/Blue.vue'

export default {
	name: 'app',
	components: { Red, Green, Blue },
	data: function(){
		return{
			nameComponents: 'Red'
		}
	},
	methods:{
		clickComponents(value){
			this.nameComponents = value;
		},

		translator(value){
			const data = [
				{name:'Red', traduction:'Vermelho'}, 
				{name:'Blue', traduction:'Azul'}, 
				{name:'Green', traduction:'Verde'}]
			const filterData = data.find(index => {return index.name == value});
			return filterData.traduction;
		},
	},
	
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	button {
		padding: 10px;
		color: #FFF;
		font-size: 1.3rem;
	}

    .caixa {
        color: #FFF;
        font-size: 1.8rem;
        padding: 25px;
		margin: 10px 0px;
    }

	.vermelho {
        border: 2px solid red;
        background-color: #f54235;
    }

	.verde {
        border: 2px solid green;
        background-color: #49b057;
    }

	.azul {
        border: 2px solid blue;
        background-color: #2594f0;
    }
</style>
