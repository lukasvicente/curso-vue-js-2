<template>
  <div>
      <div class="icon">
          <i  @click="remove(id)" class="fa-solid fa-circle-xmark"></i>
      </div>
      <div @click="taskDone(id)" class="task-body" :class="[{'danger': !task.done}, {'success': task.done}]">
        <p>{{task.name}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name:'cardItem',
    props:{
       id:{
        type: Number,
        required: true
      },
      task:{
        type: Object,
        required: true
      }
    },
    methods:{
      taskDone(value){
        this.$emit('valueTaskDone',value);
      },
      remove(value){
        this.$emit('valueRemove',value);
      }
    }
}
</script>

<style scope>
  .icon{
    float: right;
    margin-top: 12px;
    margin-right: 4px;
    cursor: pointer;
  }
 
</style>