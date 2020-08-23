<template>
  <div>
    <p>id: {{ $attrs.id }}</p>
    <div>错误： {{ msg }}</div>
    <button @click="skip">skip</button>
    <button @click="dynamicRouter">dynamicRouter</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router"; // useRoute
import { ref } from "vue";
import Dynamic from "../components/Dynamic.vue";
export default {
  setup() {
    const msg = ref("");
    const $router = useRouter();
    // const $route = useRoute();
    function skip() {
      $router.push("/nomatch").catch(error => {
        msg.value = error;
      });
    }
    function dynamicRouter() {
      $router.addRoute({
        path: "/new-route",
        name: "NewRoute",
        component: Dynamic
      });
      console.log("routers::", $router.getRoutes());
      // history.pushState({}, null, "/tweet/3");
      // removeRoute();
      // router.removeRoute('NewRoute')
      $router.push("/new-route");
    }
    return {
      msg,
      skip,
      dynamicRouter
    };
  }
};
</script>

<style>
</style>