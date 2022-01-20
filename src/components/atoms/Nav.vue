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
          :class="{ list: true, active: item.color == 'black' }"
          :id="{ refNavItem: index == 0 }"
          @click="setStyle()"
        >
          <router-link :to="item.link" :data-content="item.title">
            <box-icon
              :name="item.icon"
              type="solid"
              :color="item.color"
              class="icon"
            ></box-icon>
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
          icon: "home",
          link: "/",
          color: "",
        },
        {
          title: "About",
          icon: "user",
          link: "/about",
          color: "",
        },
        {
          title: "Work",
          icon: "bowl-rice",
          link: "/work",
          color: "",
        },
        {
          title: "Project",
          icon: "coffee",
          link: "/project",
          color: "",
        },
        {
          title: "Contact",
          icon: "phone",
          link: "/contact",
          color: "",
        },
      ],
    };
  },
  methods: {
    setStyle() {
      let index = 0;
      for (let data of this.navItem) {
        data.color = "white";
      }
      for (let [i, itter] of this.navItem.entries()) {
        if (itter.title + "Page" == this.$route.name) {
          index = i;
          itter.color = "black";
        }
      }

      let height = this.$refs.activeBack.clientHeight;
      this.$refs.activeBack.style.transform = `translateY(${index * height}px)`;

      this.$store.commit("SET_LOADING_APP", true);
      setTimeout(() => {
        this.$store.commit("SET_LOADING_APP", false);
      }, 1500);
    },
  },
  mounted() {
    this.setStyle();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/navbar.scss";
</style>
