<template>
  <div class="about">
    <div class="container">
      <div class="text">
        <i class="code">h1</i>
        <h1>
          <span>M</span>
          <span>y</span>
          <span>,</span>
          <span class="space"></span>
          <span>M</span>
          <span>y</span>
          <span>s</span>
          <span>e</span>
          <span>l</span>
          <span>f</span>
          <span class="space"></span>
          <span>&</span>
          <span class="space"></span>
          <span>I</span>
        </h1>
        <i class="code">/h1</i>
        <div class="deks">
          <i class="code">p</i>
          <p style="margin-bottom: 1rem">
            My name is Azlan Rafar I'm a Full Stack Web Developer based in
            Indonesia. I describe myself as a passionate developer who loves
            coding, open source, and the web platform.
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
  data() {
    return {
      title: "MY, Myself & I",
    };
  },
  mounted() {
    const container = this.$refs.skill;
    var x = window.matchMedia("(max-width: 900px)");
    let radius = 320;

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
@import "@/assets/css/about.scss";
</style>
