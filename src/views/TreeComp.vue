<template>
  <p>Fragment</p>
  <ul>
    <tree :data="[4, 3, 8, 9, 0, 1]"></tree>
  </ul>

  <p>Teleport</p>
  <div>
    <button @click="open = true">show</button>
    <Teleport to=".teleport">
      <div v-show="open">
        <p>我是teleport</p>
        <button @click="open = false">hide</button>
      </div>
    </Teleport>
  </div>
</template>

<script>
import Tree from "../components/Tree.vue";
import { ref } from "vue";
export default {
  components: { Tree },
  setup() {
    const open = ref(false);
    return {
      open
    };
  }
};
</script>

<style></style>
