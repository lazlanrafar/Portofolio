<template>
  <div class="navbar">
    <nav>
      <div class="logo">La.</div>
      <div class="direct" ref="navList">
        <div class="active-back">
          <span class="top-white"></span>
          <span class="top-black"></span>
          <span class="bot-white"></span>
          <span class="bot-black"></span>
        </div>
        <div ref="size" class="home list" @click="menuBackgroundAnim(0)">
          <router-link to="/" data-content="Home">
            <i class="fas fa-home"></i>
          </router-link>
        </div>
        <div class="profile list" @click="menuBackgroundAnim(1)">
          <router-link to="/about" data-content="About">
            <i class="fas fa-user"></i>
          </router-link>
        </div>

        <div class="porto list" @click="menuBackgroundAnim(2)">
          <router-link to="/work" data-content="Work">
            <i class="fas fa-project-diagram"></i>
          </router-link>
        </div>
        <div class="Project list" @click="menuBackgroundAnim(3)">
          <router-link to="/project" data-content="Project">
            <i class="fas fa-mug-hot"></i>
          </router-link>
        </div>
        <div class="contact list" @click="menuBackgroundAnim(4)">
          <router-link to="/contact" data-content="Contact">
            <i class="fas fa-address-card"></i>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      navListSize: 0,
    };
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
  mounted() {
    this.$store.state.navList = this.$refs.navList;
    this.$store.state.menuListHeight = this.$refs.size.clientHeight;
    this.$store.state.lastVisitedPage = this.$refs.size.children[0];
    this.$store.state.lastVisitedPage.classList.add("active");
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/navbar.scss";
</style>
