<template>
  <div id="app">
    <div class="view">
      <div class="symbols">
        <div class="top">
          <i class="fas fa-less-than"></i>
        </div>
        <div class="bottom">
          <i class="fas fa-slash"></i>
          <i class="fas fa-greater-than"></i>
        </div>
      </div>

      <router-view />
    </div>
    <div>
      <nav-bar></nav-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    NavBar: () => import("@/components/NavBar.vue"),
  },
};
</script>

<style lang="scss">
@import "@/assets/css/app.scss";
</style>
