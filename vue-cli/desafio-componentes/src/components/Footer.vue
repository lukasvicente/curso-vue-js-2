<template>
  <v-footer class="pa-3" app>
      <v-spacer></v-spacer>
      <div>Curso Vue &copy; {{ showData }}</div>
    </v-footer>
</template>

<script>
export default {

    computed: {
        showData(){
            return new Date().getFullYear();
        }
    }

}
</script>

<style>

</style>