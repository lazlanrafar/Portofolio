<template>
  <div class="home">
    <div class="container">
      <div class="text">
        <i class="code">h1</i>
        <h1>
          <span>H</span>
          <span>i</span>
          <span>,</span>
        </h1>
        <h1>
          <span>I</span>
          <span>'</span>
          <span>m</span>
          <span class="space"></span>
          <span style="color: var(--red-color)">L</span>
          <span>a</span>
          <span>t</span>
          <span>o</span>
          <span>e</span>
          <span>,</span>
        </h1>

        <h1 class="bottom-text">
          <span>W</span>
          <span>e</span>
          <span>b</span>
          <span class="space"></span>
          <span>D</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <div class="right">
            <div class="pupil">
              <div class="light"></div>
            </div>
          </div>
          <span>p</span>
          <span>e</span>
          <span>r</span>
          <span>.</span>
          <span class="space"></span>
          <span class="space"></span>
          <i class="code">/h1</i>
        </h1>
        <div class="deks">
          <i class="code">p</i>
          <p>Front End Developer</p>
          <i class="code">/p</i>
        </div>
        <!-- <div class="cursor"></div> -->
        <div @click="menuBackgroundAnim(1)" ref="btn" class="btn">
          <router-link class="contact-btn" to="/about">
            <span>Contact me!</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      toggle: false,
      counter: 1,
      isBoxSupport: true,
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
    this.$store.state.hover.push(this.$refs.btn);

    if (window.getComputedStyle(document.body).transformBox !== undefined) {
      this.isBoxSupport = true;
    } else {
      this.isBoxSupport = false;
    }

    const eyes = document.querySelectorAll(".pupil");
    document.onmousemove = function () {
      var x = (event.clientX * 100) / window.innerWidth + "%";
      var y = (event.clientY * 100) / window.innerHeight + "%";
      eyes.forEach((eye) => {
        eye.style.left = x;
        eye.style.top = y;
        eye.style.transform = "translate(-" + x + ", -" + y + ")";
      });
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/home.scss";
</style>
