<template>
  <div id="app" class="test">
    <div class="app-link">
      <router-link to="/">change</router-link>
      <router-link to="/comment" custom v-slot="{ href, isActive }">
        <li :class="{ active: isActive }">
          <!-- @mouseover="navigate" -->
          <a :href="href">
            <span class="xs-hidden">setup</span>
          </a>
        </li>
      </router-link>
      <router-link to="/about">effect</router-link>
      <router-link to="/tree">Fragment/Teleport</router-link>
      <router-link to="/suspense">Suspense</router-link>
      <router-link to="/async">Async Com</router-link>
      <router-link to="/sync">v-model-multi</router-link>
      <router-link to="/book/1">router</router-link>
      <router-link to="/keepalive">router-change</router-link>
    </div>
    <div style="width: 100%;height: 100%;">
      <!-- <router-view></router-view> -->
      <router-view v-slot="{ Component, route }">
        <component :is="Component" v-bind="route.params" />
        <!-- <component v-if="route.matched.length > 0" :is="Component" v-bind="route.params" />
        <div v-else>Not Found</div>-->
      </router-view>
    </div>
  </div>
</template>

<script>
import "./style/index.less";

export default {
  name: "App"
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  list-style: none;
}
.active {
  span {
    color: blueviolet;
  }
}
.router-link-active {
  color: blue;
}
.test {
  display: flex;
  .app-link {
    margin-left: 20px;
  }
  a {
    height: 30px;
    line-height: 30px;
    display: block;
    border: 1px solid;
    text-decoration: none;
    border-radius: 5px;
    margin-bottom: 10px;
  }
}
</style>
