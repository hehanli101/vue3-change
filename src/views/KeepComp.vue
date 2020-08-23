<template>
  <div>
    <p>Using both KeepAlive and Transition at the same time</p>
    <router-link to="/aa">AA</router-link>|
    <router-link to="/bb">BB</router-link>|
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="Component" v-bind="route.params"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
