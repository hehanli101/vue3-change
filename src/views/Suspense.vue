<template>
  <h1>Suspense</h1>
  <Suspense>
    <template #default>
      <async-component :timeout="3000"></async-component>
    </template>
    <template #fallback>
      <p>loading...</p>
    </template>
  </Suspense>
</template>

<script>
import AsyncComponent from "../components/AsyncComponent.vue";

export default {
  components: {
    AsyncComponent
  }
};
</script>

<style></style>
