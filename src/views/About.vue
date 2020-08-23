<template>
  <div>
    <div
      @mousedown="start"
      :style="{
        backgroundColor: '#dcade6',
        width: '100px',
        height: '100px',
        'border-radius': '50%',
        top: pos.y + 'px',
        left: pos.x + 'px',
        position: 'absolute',
      }"
    ></div>

    <div>
      count: {{ state.count }}
      <button @click="add">+</button>
      msg: {{ msg }}
      <button @click="add1">+</button>
    </div>
  </div>
</template>
<script>
import { drag } from "../utils/drag";
import { ref, reactive, watchEffect, watch, computed } from "vue";

// function fetchData() {
//   onMounted()) => {
//     fetch()...
//   })
// }

export default {
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  setup() {
    console.log("setup");
    // props
    let { start, pos } = drag();
    // ==========================
    const state = reactive({
      count: 0
    });
    function add() {
      state.count++;
    }
    // fetchData();
    function add1() {
      msg.value++;
    }
    const msg = ref(0); // msg.vlaue

    const plusOne = computed(() => state.count + 1);

    const stop1 = watchEffect(() => console.log("watchEffect::", state.count));

    const stop2 = watch(
      [msg, plusOne],
      ([newMsg, newPlusOne], [oldMsg, oldPlusOne]) => {
        console.log("msg::", newMsg, oldMsg);
        console.log("newPlusOne::", newPlusOne, oldPlusOne);
        pos.x = pos.x + newMsg * 10;
        pos.y = pos.y + newPlusOne * 10;
      }
    );

    const stop = watch(
      () => state.count,
      (count, oldCount) => {
        console.log("watch::", count, oldCount);
        if (count === 3) {
          stop();
          stop1();
          stop2();
        }
      }
    );
    return {
      start,
      pos,
      add,
      state,
      add1,
      msg
      // ...toRefs(state)
    };
  }
};
</script>
