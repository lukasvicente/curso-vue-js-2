new Vue({
    el:'#challenge',
    data: {
        valueInput: ""
    },
    methods:{
        clickButton: function(){
            alert('Botao clicado!')
        },
        showValueInput: function(event){
            this.valueInput = event.target.value;
        }
    }
})