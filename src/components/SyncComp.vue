<template>
  <div>
    {{ open }}
    {{ close }}
    <button @click="change">change</button>
  </div>
</template>

<script>
export default {
  props: ["open", "close"],
  methods: {
    change() {
      this.$emit("update:open", "opening");
      this.$emit("update:close", "closeing");
    }
  }
};
</script>

<style></style>
