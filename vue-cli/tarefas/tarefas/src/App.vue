<template>
	<div id="app">
		<h1>Tarefas</h1>
		<v-progress-bar :valuePercentage="percentage" />  
		<v-todo-list @percentage="percentage = $event" />
	</div>
</template>

<script>
import Progressbar from '@/components/ProgressBar.vue';
import TodoList from '@/components/TodoList.vue';

export default {
	components:{
		'v-progress-bar' : Progressbar,
		'v-todo-list': TodoList,
	},
	data: function(){
		return{
			percentage: '0%'
		}
	}

}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
	.task{
		display: inline-block;
		margin-left: 10px;
		margin-top: 10px;
		width: 150px;
	}
	.task .task-body{
		flex: 1 1 auto;
		min-height: 1px;
		padding: 1.25rem;
		margin-top: 10px;
		border-radius: 5px;
		cursor: pointer;
	}
	.task .task-body.success{
		background: #499749; 
	}
	.task .task-body.success > p{
		text-decoration: line-through;
	}
	.task .task-body.danger{
		background:rgb(209, 101, 101); 
	}
	.input-add{
		margin-top: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.input-add > button{
		cursor: pointer;
		height: 26px;
		border: 1px solid white;
		color: white;
		background-color: #3a51d9;
		border-radius: 0 5px 5px 0;
	}
	.input-add > input{
		height: 20px;
		border: 2px solid white;
		border-radius: 5px 0 0 5px;
	}
	.progress-bar {
		width: 80%;
		height: 20px;
		border: 1px solid #AAA;
		margin-bottom: 10px;
		border-radius: 5px;
	}

	.progress-bar .progress {
		display: flex;
		justify-content: center;
		height: 100%;
		background-color: green;
	}
</style>
