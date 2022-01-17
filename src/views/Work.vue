<template>
  <div class="work-page">
    <header-text text="My Work" class="title"></header-text>

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
  name: "WorkPage",
  components: {
    HeaderText: () => import("@/components/atoms/HeaderText"),
  },
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
