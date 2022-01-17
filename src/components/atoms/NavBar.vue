<template>
  <div class="navbar">
    <nav>
      <div class="logo">La.</div>
      <div class="nav-menu" ref="navList">
        <div class="active-back" ref="activeBack">
          <span class="top-white"></span>
          <span class="top-black"></span>
          <span class="bot-white"></span>
          <span class="bot-black"></span>
        </div>
        <div
          v-for="(item, index) in navItem"
          :key="index"
          class="list"
          :id="{ refNavItem: index == 0 }"
          @click="setActive(index)"
        >
          <router-link :to="item.link" :data-content="item.title">
            <i :class="item.icon"></i>
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
      navItem: [
        {
          title: "Home",
          icon: "fas fa-home",
          link: "/",
          index: 0,
        },
        {
          title: "About",
          icon: "fas fa-user",
          link: "/about",
          index: 1,
        },
        {
          title: "Work",
          icon: "fas fa-project-diagram",
          link: "/work",
          index: 2,
        },
        {
          title: "Project",
          icon: "fas fa-mug-hot",
          link: "/project",
          index: 3,
        },
        {
          title: "Contact",
          icon: "fas fa-address-card",
          link: "/contact",
          index: 4,
        },
      ],
    };
  },
  computed: {
    navActive: {
      get() {
        return this.$store.state.navActive;
      },
      set(val) {
        this.$store.commit("SET_NAVBAR_ACTIVE", val);
      },
    },
  },
  methods: {
    setActive() {
      this.navActive = this.$route.name;
      this.setStyle();
    },
    setStyle() {
      let index = 0;
      for (let itter of this.navItem) {
        if (itter.title + "Page" == this.navActive) {
          index = itter.index;
        }
      }

      let height = this.$refs.activeBack.clientHeight;
      this.$refs.activeBack.style.transform = `translateY(${index * height}px)`;
    },
  },
  mounted() {
    this.navActive = this.$route.name;
    this.setStyle();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/navbar.scss";
</style>
