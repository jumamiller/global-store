<template>
  <div class="container">
    <input type="text" v-model="number" />
    <button @click="addNumber(number)">Add New Number</button>
  </div>
</template>

<script>
import {store} from "@/assets/js/store";

export default {
  name: "NumberSubmit",
  data(){
    return {
      number:0
    }
  },
  methods:{
    addNumber(number){
      store.addNewNumber(Number(number));
    }
  }
}
</script>

<style scoped>

</style>
