<template>
  <div>
    <!-- <input :value="something"  @input="something = $event.target.value"> -->
    <sync-comp v-model:open="open" v-model:close="close"></sync-comp>
    <!-- <MyComponent
      :open="xxx"
      @update:open="
        (newValue) => {
          xxx = newValue
        }
      "
    />-->
    <hcomp :msg="open"></hcomp>
  </div>
</template>

<script>
import SyncComp from "../components/SyncComp.vue";
import { h } from "vue";

const hcomp = {
  render(a, b) {
    console.log("hcomp", a, b);
    return h("div", "我是render function");
  }
};

export default {
  components: { SyncComp, hcomp },
  data() {
    return {
      open: "open",
      close: "close"
    };
  },
  watch: {
    open() {
      console.log("change");
    }
  }
};
</script>

<style></style>
