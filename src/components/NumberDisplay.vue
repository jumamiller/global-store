<template>
  <div class="container">
    <h3>values array:{{storeState}}</h3>
    <div>
      <NumberSubmit/>
    </div>
  </div>
</template>

<script>
import NumberSubmit from "@/components/NumberSubmit";
import {store} from "@/assets/js/store";
export default {
  name: "NumberDisplay",
  components: {NumberSubmit},
  data(){
    return{
      storeState: store.state
    }
  }
}
</script>

<style scoped>

</style>
