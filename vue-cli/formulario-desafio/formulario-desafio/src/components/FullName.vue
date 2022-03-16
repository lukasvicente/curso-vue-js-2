<template>
    <rotulo nome="Nome Completo">
        {{name}} {{lastName}}
    </rotulo>
</template>

<script>
import Rotulo from './Rotulo.vue'
 
export default {
    components:{
        Rotulo
    
    },
    props:{
        name: {
            type:String,
            default: 'Sem nome!'
            },
        lastName:{
            type: String
        }
    }

}
</script>

<style>

</style>