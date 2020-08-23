<template>
  <h2>Vue 3.0</h2>
  <a href="https://v3.vuejs.org/" target="_blank" rel="noopener noreferrer">官网文档</a>
  <a
    href="https://github.com/vuejs/rfcs/pulls?q=is%3Apr+is%3Amerged+label%3A3.x"
    target="_blank"
    rel="noopener noreferrer"
  >RFCs</a>
  <a
    href="https://www.bilibili.com/video/av796189639?p=1"
    target="_blank"
    rel="noopener noreferrer"
  >视频地址</a>
  <ul class="app-content">
    <li v-for="item in list" :key="item" class style="--color:red">
      <p>{{ item.title }}</p>
      <a v-if="item.url" :href="item.url" target="_blank">{{ item.urlName }}</a>
      <div v-for="key in item.child" :key="key">{{ key }}</div>
    </li>
  </ul>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const list = ref([
      {
        title: "1.Tree-shaking",
        child: ["① Golbal API"]
      },
      {
        title: "2.Composition API",
        child: [
          "① ref",
          "② toRefs",
          "③ reactive",
          "④ computed",
          "⑤ watch",
          "⑥ watchEffect",
          "⑦ onMounted",
          "⑧ onUnmounted"
        ]
      },
      {
        title: "3.Fragment,Teleport,Suspense",
        child: []
      },
      {
        title: "4.Performance",
        url: "https://vue-next-template-explorer.netlify.app/",
        urlName: "vue-next-template-explorer",
        child: []
      },
      {
        title: "5.Custom Render API",
        child: []
      },
      {
        title: "6.Vue-router",
        url:
          "https://github.com/vuejs/rfcs/pulls?q=is%3Apr+is%3Amerged+label%3Arouter",
        urlName: "RFCs",
        child: []
      },
      {
        title: "7.Vuex",
        child: []
      },
      {
        title: "8.其他变化",
        url:
          "https://github.com/vuejs/rfcs/pulls?q=is%3Apr+is%3Amerged+label%3A3.x",
        urlName: "RFCs",
        child: [
          "① v-model变化",
          "② 函数式组件",
          "③ 自定义指令",
          "④ 删除了data object",
          "⑤ v-on删除keycode",
          "⑥ 删除了filter",
          "⑦ 删除了内联模板",
          "⑧ transition-class类名变化",
          "⑨ events: 删除了$on,$off,$once"
        ]
      }
    ]);
    return {
      list,
      aa: "red"
    };
  }
};
</script>

<style vars="{ color }" lang="less">
.text {
  color: var(--color);
}
* {
  padding: 0;
  margin: 0;
}
.app-content {
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    color: black;
    font-weight: 700;
    text-align: left;
  }
  div {
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    text-align: left;
    margin-left: 40px;
  }
  a {
    margin: none;
    border: none;
  }
  li {
    width: 300px;
  }
}
</style>
