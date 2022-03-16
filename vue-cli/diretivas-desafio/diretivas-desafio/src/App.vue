<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<button v-who:click="onClick">Enviar</button>
		<br>
		<input type="text" v-who:keypress.Enter="onInput" placeholder="Digite e aperte enter!" v-model="input" />
	</div>
</template>

<script>
export default {

	data(){
		return {
			input:''
		}
	},
	directives:{
		who :{
			bind(el, binding){
				const typeEvent = binding.arg;
				const func = binding.value
				const modifiers = Object.keys(binding.modifiers)[0]
				
				if( typeEvent == 'keypress'){
					el.addEventListener(typeEvent,  (event) => {
						if(event.key === modifiers){
							func();							
						} 						
					});		
				}else{
					el.addEventListener(typeEvent, func);
				}
			}
		}
	},
	methods:{
		onClick(){
			alert('Click teste!')
		},
		onInput(){
			alert(this.input)
			this.input = '';
		}
	}
	
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
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
