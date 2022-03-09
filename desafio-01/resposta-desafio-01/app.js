new Vue({
    el:'#challenge',
    data: {
        name: 'Lucas Vicente Rocha',
        age: 26,
        linkImage: 'https://cf.shopee.com.br/file/c9958e99e57a77b005255c21c855d895'
    },
    methods: {
        multiplyAgeForThree: function(){
            return this.age * 3;
        },

        showMathRamdon: function(){
            return Math.random();
        }

    }
})