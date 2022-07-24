<template>
  <div class="about">
    <div class="container">
      <div class="text">
        <div class="code">h1</div>
        <header-text
          text="Me,Myself & I"
          class="title"
          open="true"
          close="true"
        ></header-text>
        <div class="deks">
          <i class="code">p</i>
          <p style="margin-bottom: 1rem">
            Hii I'm a Full Stack Web Developer based in Indonesia. I describe
            myself as a passionate developer who loves coding, open source, and
            the web platform.
          </p>
          <p>
            Aside from my job, I like to create and contribute to open source
            projects. That helps me to learn a ton of new stuff, grow as a
            developer and support other open source projects. Also I enjoy
            writing technical things at my blog.
          </p>
          <i class="code">/p</i>
        </div>
      </div>
      <div class="global" ref="skill"></div>
    </div>
  </div>
</template>

<script>
import TagCloud from "TagCloud";

export default {
  name: "About",
  components: {
    HeaderText: () => import("@/components/HeaderText"),
  },
  mounted() {
    const container = this.$refs.skill;
    var x = window.matchMedia("(max-width: 600px)");
    let radius = 350;

    if (x.matches) {
      radius = 200;
    }

    const texts = [
      "HTML 5",
      "CSS 3",
      "JavaScript",
      "Vue.js",
      "Next.js",
      "Jquery",
      "Bootstrap 5",
      "Laravel",
      "Wordpress",
      "SASS",
      "Git",
      "TypeScript",
    ];
    const options = {
      radius: radius,
      itemClass: "item",
    };

    TagCloud(container, texts, options);
    document.querySelector(".tagcloud").style.margin = "auto";
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/about.scss";
</style>
