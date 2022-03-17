export default  {
	computed:{
		replaceComputed(){
			const replace = /\s/g;
			const srt = this.message.replace(replace,',');
			
			return srt;
		},
		countComputed(){
		return this.message.split(' ').map(element => 
			`${element} (${element.length})`
			).join(' ')
		}
	}	
}