<template>
  <div class="progress-bar">
     <span class="tittle-progress-bar">{{valuePercentage}} </span>
    <div class="progress" :style="{width:valuePercentage}"> </div>
  </div>
</template>

<script>
export default {
    name:'progressBar',
    props:{
      valuePercentage: {
        type: String,
        default: '0%'
      }
    }
}
</script>

<style>
.tittle-progress-bar{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
}
</style>