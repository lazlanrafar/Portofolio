<template>
  <div class="home">
    <div class="container">
      <div class="text">
        <div class="title">
          <home-text text="Hi," open="true"></home-text>
          <home-text text="I'm Latoe,"></home-text>
          <home-text text="Web Devel*per." close="true"></home-text>
        </div>
        <br />
        <div class="deks">
          <i class="code">p</i>
          <p>Front-End & Back-End Developer</p>
          <i class="code">/p</i>
        </div>
        <router-link class="btn-primary" to="/about" @click="setNavActive()">
          <span>Contact me!</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    HomeText: () => import("@/components/organisms/Home/HomeText"),
  },
  methods: {
    setNavActive() {
      this.$store.commit("SET_NAVBAR_ACTIVE", "AboutPage");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/home.scss";
</style>
