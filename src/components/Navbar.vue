<template>
  <div class="navbar">
    <nav>
      <div class="logo">
        <h1>La.</h1>
      </div>
      <div class="direct" ref="navList">
        <div class="active-back" ref="menuBag">
          <span class="top-white"></span>
          <span class="top-black"></span>
          <span class="bot-white"></span>
          <span class="bot-black"></span>
        </div>
        <div
          v-for="(navItem, index) in navList"
          :key="index"
          class="list"
          @click="navTransition(index)"
        >
          <router-link :to="navItem.link" :data-content="navItem.content">
            <box-icon
              :name="navItem.icon"
              style="fill: currentColor"
              class="icon"
            ></box-icon>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import TransitionMixin from "@/mixins/transition";
export default {
  name: "Navbar",
  mixins: [TransitionMixin],
  data() {
    return {
      navListSize: 0,
      navList: [
        {
          name: "Home",
          link: "/",
          content: "Home",
          icon: "home-alt",
        },
        {
          name: "About",
          link: "/about",
          content: "About",
          icon: "user",
        },
        {
          name: "Work",
          link: "/work",
          content: "My Work",
          icon: "bowl-rice",
        },
        {
          name: "Project",
          link: "/project",
          content: "My Project",
          icon: "coffee",
        },
        {
          name: "Contact",
          link: "/contact",
          content: "Contact",
          icon: "phone",
        },
      ],
    };
  },
  mounted() {
    this.$refs.navList.children[1].classList.add("active");

    this.$store.state.App.navBG = this.$refs.menuBag;
    this.$store.state.App.navHeight = this.$refs.menuBag.clientHeight;
    this.$store.state.App.navList = this.$refs.navList;
    this.$store.state.App.navLastActive = this.$refs.navList.children[1];
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/navbar.scss";
</style>
