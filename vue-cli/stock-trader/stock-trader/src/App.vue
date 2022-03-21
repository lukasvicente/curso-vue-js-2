<template>
	<div>
		<v-app id="inspire">
			
			<v-header />
			<v-content>	
				<router-view />
			</v-content>
		</v-app>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Content from './components/Content.vue';

export default {
	components:{
		'v-header': Header,
		'v-content': Content,
	}
}
</script>

<style>

</style>

