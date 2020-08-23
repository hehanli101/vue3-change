<template>
  <div>
    <p>我在加载异步组件</p>
    <async-comp></async-comp>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import LoadingComponent from "../components/LoadingComponent.vue";
import ErrorComponent from "../components/ErrorComponent.vue";

const AsyncComp = defineAsyncComponent({
  loader: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(import("../components/AsyncChild.vue"));
      }, 3000);
    });
  },
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 200,
  timeout: 5000,
  suspensible: false,
  onError(error, retry, fail, attempts) {
    if (error.message.match(/fetch/) && attempts <= 3) {
      retry();
    } else {
      fail();
    }
  }
});
// const AsyncComp = () => ({
//   // 需要加载的组件 (应该是一个 `Promise` 对象)
//   component: import("../components/AsyncChild.vue"),
//   // 异步组件加载时使用的组件
//   loading: LoadingComponent,
//   // 加载失败时使用的组件
//   error: ErrorComponent,
//   // 展示加载时组件的延时时间。默认值是 200 (毫秒)
//   delay: 200,
//   // 如果提供了超时时间且组件加载也超时了，
//   // 则使用加载失败时使用的组件。默认值是：`Infinity`
//   timeout: 3000
// });
export default {
  components: { AsyncComp: AsyncComp }
};
</script>

<style>
</style>