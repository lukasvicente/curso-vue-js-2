new Vue({
	el: '#desafio',
	data: {
		startEffect: false,
		inputChallengeThree:'',
		inputChallengeFourClassName:'',
		inputChallengeFourControl: false,
		inputChallengeFive: '',
		progress: 0
		 
	},
	methods: {
		startEffectClick() {
			setInterval(() => {
				this.startEffect = !this.startEffect;
			}, 1000);
			
		},
		setInputChallengeFour(event){
			if(event.target.value === 'true'){
				this.inputChallengeFourControl = true;
			}else if(event.target.value === 'false' ){
				this.inputChallengeFourControl = false
			}
		},
		startProgress() {
			setInterval(() => {
				if(this.progress < 100 ){
					this.progress += 10; 
				}else{
					this.progress = 0;
				}
				
			}, 700);
		}

	},
	computed: {
		effectToggle(){
			return this.startEffect ? 'encolher' : 'destaque'
		},

		applyClasseName(){
			return this.inputChallengeFourControl ? this.inputChallengeFourClassName : ''
		},
		
		withProgressApply(){
			return `${this.progress}%`;
		}
	}
})
