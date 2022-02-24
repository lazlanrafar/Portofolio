export default {
  methods: {
    pageTransition() {
      this.$store.state.App.bgTranstition.classList.toggle("show");
      setTimeout(() => {
        this.$store.state.App.bgTranstition.classList.toggle("show");
      }, 1500);
    },
    navTransition(index) {
      let navList = this.$store.state.App.navList;
      this.$store.state.App.navLastActive.classList.remove("active");
      this.$store.state.App.navLastActive = navList.children[index + 1];
      navList.children[index + 1].classList.add("active");
      navList.children[index + 1].children[0].classList.add("active");
      this.$store.state.App.navBG.style.transform = `translateY(${
        index * this.$store.state.App.navHeight
      }px)`;

      this.pageTransition();
    },
  },
};
