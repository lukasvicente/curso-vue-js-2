<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		{{'Lucas Rocha Vicente ' | replace }}

		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{ 'Pedro é legal' | count }} </p> 
		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<hr>
		<h3>Computed</h3>
		<p>{{ replaceComputed }} </p> 
		<p>{{ countComputed }} </p> 
		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import mixin from './mixin';

export default {
	mixins: [mixin],
	data(){
		return {
			message: 'Pedro é legal'
		}
	},
	filters:{
		replace(value){
			const replace = /\s/g;
			const srt = value.replace(replace,',');
			
			return srt;
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
	font-size: 2.5rem;
}
</style>
