new Vue({
    el:'#challenge',
    data: {
        value: 0
    },
    methods: {
        sumValueWithFive(){
            this.value += 5;
        },
        sumValueWithOne(){
            this.value += 1;
        },
    },
    computed:{
        resultValue(){
            return this.value != 37 ? 'Valor diferente!' : 'Valor igual!'
        }
    },
    watch:{
        resultValue(){
            setTimeout(() => {
                this.value = 0
            }, 5000);
        }
    }
})