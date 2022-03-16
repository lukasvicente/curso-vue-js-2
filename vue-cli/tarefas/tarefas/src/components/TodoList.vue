<template>
    <div>
        <div class="input-add">
            <input 
                @keyup.enter.exact="addTask" 
                v-model="inputTask" 
                type="text"
                placeholder="Nova tarefa?" /> 
            <button @click="addTask"  type="button"><i class="fa-solid fa-plus"></i></button>
        </div>
        
            <template v-for="(item, index) in tasks">
                <v-card-item 
                    class="task"  
                    :key="index" 
                    :id="index"  
                    :task="item"
                    @valueTaskDone="taskDone($event)" 
                    @valueRemove="remove($event)" />   
            </template>
        <div class="title">
            {{taskEmpty}}
        </div>
        
    </div>
</template>

<script> 
import CardItem from './CardItem.vue';

export default {
    name:'todoList',
    components:{
        'v-card-item':CardItem, 
    },
    data: function(){
        return {
            tasks:[],
            inputTask:''
             
        }
    }, 
    mounted() {
        this.getTask();
    },
    methods:{
        getTask(){
            const task = localStorage.getItem('tasks');
            this.tasks = JSON.parse(Object(task));
             
        },

        updateTask(){
            localStorage.setItem("tasks", JSON.stringify(this.tasks));
        },
        
        calculatorProgress(){
            const done = this.tasks.filter( item => (item.done === true) );            
            const calcPorcetage =  (done.length * 100)/this.tasks.length;
            const formatVelue = parseFloat(calcPorcetage.toFixed(0));
            this.$emit('percentage', `${isNaN(formatVelue) ? 0 : formatVelue}%`  );  
        },

        addTask(){
            if( this.inputTask != ''){
                const data = {name: this.inputTask, done:false };
                this.tasks.push(data); 
                this.calculatorProgress();
                this.updateTask();
                this.inputTask = '';
            }else{
                alert('Insira uma nova tarefa!')
            }

        },
        taskDone(value){
           this.tasks[value].done = !this.tasks[value].done;
           this.calculatorProgress();
           this.updateTask();
        },
        remove(value){
            this.tasks.splice(value,1); 
            this.updateTask();
        }
    }, 
    watch:{
        tasks(){
            this.calculatorProgress();
        }

    },
    computed:{
        taskEmpty(){
            return this.tasks.length > 0 ? '': 'Sua vida está em dia'; 
        }
    }
}
</script>

<style>
    .title{
        margin-top: 15px;
    }
</style>