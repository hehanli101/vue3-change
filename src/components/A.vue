<template>
  <div>
    <div>{{ num }}</div>
    <button @click="add">add</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const num = ref(0);
    function add() {
      num.value++;
    }
    return {
      num,
      add
    };
  }
};
</script>

<style>
</style>