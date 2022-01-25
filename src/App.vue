<template>
  <div id="app">
    <div class="view" ref="view">
      <div class="symbols">
        <div class="top">
          <div class="code">html</div>
          <div class="code ml-1">body</div>
        </div>
        <div class="bottom">
          <div class="code ml-1">/body</div>
          <div class="code">/html</div>
        </div>
      </div>

      <transition name="fade" mode="out-in" class="route">
        <keep-alive>
          <div class="md:ml-7">
            <router-view />
          </div>
        </keep-alive>
      </transition>
    </div>
    <!-- <div class="trans-back" ref="transition">
      <p>Latoe is thinking &#129300;</p>
      <div class="loadbar">
        <div class="progress"></div>
      </div>
    </div> -->
    <div>
      <nav-bar></nav-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    NavBar: () => import("@/components/Base/Nav.vue"),
  },
  computed: {
    LoadingApp() {
      return this.$store.state.App.LoadingApp;
    },
  },
  watch: {
    LoadingApp(val) {
      if (val) {
        this.$refs.view.style.opacity = `0`;
        this.$refs.transition.style.transform = `translateX(0)`;
      } else {
        this.$refs.view.style.opacity = `1`;
        this.$refs.transition.style.transform = `translateX(100%)`;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/app.scss";
</style>
