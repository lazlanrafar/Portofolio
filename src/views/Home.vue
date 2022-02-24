<template>
  <div id="home">
    <div>
      <div class="code">h1</div>
      <HeaderText text="Hi," home="true" />
      <HeaderText text="I'm Latoe," home="true" />
      <HeaderText text="Web Developer" close="true" home="true" />
      <div class="code">p</div>
      <p class="desc">Front-End & Back-End Developer</p>
      <div class="code">/p</div>
      <br /><br />
      <div @click="navTransition(1)">
        <router-link to="/about" class="btn">About me!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import TransitionMixin from "@/mixins/transition";

export default {
  name: "Home",
  mixins: [TransitionMixin],
  components: {
    HeaderText: () => import("@/components/HeaderText.vue"),
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/home.scss";
</style>
