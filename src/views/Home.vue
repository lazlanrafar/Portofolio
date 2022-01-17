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
        <router-link
          class="btn-primary"
          to="/about"
          @click="menuBackgroundAnim(1)"
        >
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
    menuBackgroundAnim(index) {
      let navList = this.$store.state.navList;
      this.$store.state.lastVisitedPage.classList.remove("active");
      this.$store.state.lastVisitedPage = navList.children[index + 1];
      navList.children[index + 1].classList.add("active");
      navList.children[index + 1].children[0].classList.add("active");
      navList.children[0].style.transform = `translateY(${
        index * this.$store.state.menuListHeight
      }px)`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/home.scss";
</style>
