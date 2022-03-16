<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!sendControl">
				<div class="cabecalho">Formulário</div>
				<rotulo nome="Nome"> 
					<input type="text" v-model="name" />
				</rotulo>
				<rotulo nome="Sobrenome"> 
					<input type="text" v-model="lastName" />
				</rotulo>
				<rotulo nome="Email"> 
					<input type="email" v-model="email" />
				</rotulo>
				<rotulo nome="Senha"> 
					<input type="password" v-model="password"/>
				</rotulo>
				<rotulo nome="Armazenar Dados?"> 
					<span class="mr-4"> <input type="radio" value="Nao" v-model="storeData"/>Não </span>
					<span class="mr-4"> <input type="radio" value="Sim" v-model="storeData"/>Sim </span>
				</rotulo>

				<button @click.prevent="send" type="submit">Enviar</button>

				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
			</form>
			<div class="painel"  v-if="sendControl">
				<div class="cabecalho">Resultado</div>
					<rotulo nome="Nome"> 
					{{name}}
				</rotulo>
				<rotulo nome="Sobrenome"> 
					{{lastName}}
				</rotulo>
				<rotulo nome="Email"> 
					{{email}}
				</rotulo>
				<rotulo nome="Senha"> 
					{{password}}
				</rotulo>
				<rotulo nome="Armazenar Dados?"> 
					{{storeData}}
				</rotulo>
				<full-name :name="name" :lastName="lastName" />
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import FullName from './components/FullName.vue'

export default {
	name: 'app',
	components: { Rotulo, FullName },
	data(){
		return{
			name:'',
			lastName:'',
			email:'',
			password:'',
			storeData:'Nao',
			sendControl: false
			
		}
	},
	methods:{
		send(){
			this.sendControl = true;
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
