<template>
  <div id="app">
    <div>
      <Welcome />
    </div>

    <Navbar />

    <div class="view">
      <div class="symbols">
        <div class="top">
          <div class="code">html</div>
          <div class="code" style="margin-left: 0.5rem">body</div>
        </div>
      </div>

      <transition name="fade" mode="out-in" class="route">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>

      <div class="symbols">
        <div class="bottom">
          <div class="code" style="margin-left: 0.5rem">/body</div>
          <div class="code">/html</div>
        </div>
      </div>
    </div>

    <div class="trans-back" ref="transition">
      <p>Let me think &#129300;</p>
      <div class="loadbar">
        <div class="progress"></div>
      </div>
    </div>
  </div>
</template>

<script>
import TransitionMixin from "@/mixins/transition";
export default {
  name: "App",
  mixins: [TransitionMixin],
  components: {
    Navbar: () => import("@/components/Navbar.vue"),
    Welcome: () => import("@/components/Welcome.vue"),
  },
  mounted() {
    this.$store.state.App.bgTranstition = this.$refs.transition;

    // console.log(this.$route.name);
    // switch (this.$route.name) {
    //   case "Home":
    //     this.navTransition(0);
    //     break;
    //   case "About":
    //     this.navTransition(1);
    //     break;
    //   case "Work":
    //     this.navTransition(2);
    //     break;
    //   case "Project":
    //     this.navTransition(3);
    //     break;
    //   case "Contact":
    //     this.navTransition(4);
    //     break;
    //   default:
    //     this.navTransition(0);
    //     break;
    // }
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap");
@font-face {
  font-family: "coolvetica";
  src: url(./assets/fonts/coolvetica.ttf) format("truetype");
}
</style>
