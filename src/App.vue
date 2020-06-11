<template>
  <div id="app">
    <!-- <transition  enter-to-class="rotateUpLeft"  leave-to-class ="rotateUpLeft" enter-active-class="rotateInUpRight" leave-active-class="rotateOutUpLeft">

    <router-view class="animated"></router-view>

    </transition>-->
    <!-- <transition  enter-to-class="rotateUpLeft"  leave-to-class ="rotateUpLeft" enter-active-class="rotateInUpRight" leave-active-class="rotateOutUpLeft"> -->
    <keep-alive>
      <router-view class="animated" v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件，比如 Home！ -->
      </router-view>
    </keep-alive>
    <!-- </transition> -->
    <!-- <transition  enter-to-class="rotateUpLeft"  leave-to-class ="rotateUpLeft" enter-active-class="rotateInUpRight" leave-active-class="rotateOutUpLeft"> -->
    <router-view class="animated" v-if="!$route.meta.keepAlive">
      <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
    </router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
export default {
  name: "App",

  beforeUpdate() {},
  
  mounted() {},

  watch: {}
};
</script>
<style>
</style>
