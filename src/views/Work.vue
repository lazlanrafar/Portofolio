<template>
  <div class="work-page">
    <h1 class="title-page">
      <span class="hov">M</span>
      <span class="hov">y</span>
      <span class="space"></span>
      <span class="hov">p</span>
      <span class="hov">r</span>
      <span class="hov">o</span>
      <span class="hov">j</span>
      <span class="hov">e</span>
      <span class="hov">c</span>
      <span class="hov">t</span>
      <span class="hov">s</span>
    </h1>

    <div class="work-list">
      <div class="work" v-for="work in myProjects" :key="work.key">
        <div class="information">
          <span class="code">h1</span>
          <h2 class="work-number">0{{ work.key }}.</h2>
          <h1 class="work-title">
            {{ work.title }}
            <span class="space"></span>
            <span class="space"></span>
            <span class="code">/h1</span>
          </h1>
          <img :src="work.img" alt="" class="mobile-img" />
          <span class="code">p</span>
          <p class="description">
            {{ work.description }}
          </p>
          <div class="tools">
            <p>
              Code Tools :
              <span>{{ work.codeTools.join(", ") }}</span>
            </p>
            <p class="design">
              Design : <span>{{ work.design }}</span>
            </p>
          </div>
          <span class="code">/p</span>
          <div class="links">
            <a
              target="_blank"
              :href="work.link"
              :class="work.link === '' ? 'disabled' : ''"
            >
              Visit Now <i class="fas fa-external-link-square-alt"></i>
            </a>
          </div>
        </div>
        <div class="img">
          <img :src="work.img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpand: false,
      icon: "fas fa-expand",
      isDetail: false,
      myProjects: [
        {
          title: "Web Application for Online Consultation (Kliniku)",
          description:
            "Kliniku is an online consultation platform where people can fill in an online form about their health issue to send for a doctor. The doctor can respond and give them medical advice.",
          source: "https://github.com/GunawanAhmad/Sisfo-Klinik-Full-Stack",
          link: "",
          codeTools: ["VueJS", "MongoDB", "NodeJs", "ExpressJS"],
          design: "Design by Faris Azizy",
          img: "https://gunawanahmad.github.io/img/kliniku.5888c118.svg",
          key: 1,
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/work.scss";
</style>
